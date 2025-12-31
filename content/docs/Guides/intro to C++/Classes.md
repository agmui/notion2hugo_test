---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
 `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.

</details>



## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAGT6MEP%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfxunBUG0OvJPDYZxy580Goo%2Fgg8m6fnmBGPJquPmjDAiEAtJuZqZe8UR01p%2BffXVStiiz3sgdMQ5k18sadm9ks5msqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1vdwz1xd2irrxSiyrcA0CYl5w3XIlxlvDgH00HbD4NcNGeeR1zraKMViFhIU%2BbUncGcEB9ou7KaOeWvLWWDFDJUDuZTjld3KATZ10dUKwVBvMzB5e78BBNtgIUk%2FuNdedBxXWvAABhoK%2B7waxusyFhvbXkO6W%2FebB5eEADM91O56dZtuL3UPPvqgDYzw0P58Up1yRviAk4Eh8UpbU3TASUFTcdAhUEENSLPlTWAimeyUjavwpmjZuzMYrjJWOnZdjxqIziuYiB47aC1yMo0REWnuOv0Hi9DiOX%2FckVet15dDCniN6VdT552S9l0Kwwja6PGGjkAPluu3UEaT219MmdTraGSr4xJivJbHZHxcKbPHRll5ZYfI1%2FNDcB2STfPO4tdLcJ5yoyRGenoazCLdnePb8orfXGDiuPsp30F60bnFsN38tJb7nJiQ2RR1vZRAuqD31EIhyRjR04EqjSFzZw00JaO1VOyf0ahPQF1JDTzLu7AUTV0FBhs5FNp3CsBpOn6AAOAuwpqUr3zMXcGhBg%2Be8RExUN%2FyTef6oQipk6QZVA%2FpOGnTcdVD%2FRPswh1aYywz2pRog%2B4foovbeHm%2BEHIYKz1xN5KBNWFWO00mtbsOFguj8ORLkPNn7fhmJGL9mCAGTa1yU%2F1MysMPH20coGOqUB3d4JT93cXfnUEnmqSfIsyFYeMMS1m3sjDxUMX5H8HcW0asfSLKMYCfG1jHB%2Fr%2FFafFoesR598JCwj0GbJgz2x1rhZPKPQMMqwUEevED%2BZRZXoLO%2F7eIeR8eQmC1u4sO6jhQapFl4bSD0aLDWqg6OjbEaL%2BRr1ZrzFvdB%2Boj2ECouOxICH3MXmDoEvfgphF2Oe8zJEAwCXuuKPidmQ76kJNsivs8U&X-Amz-Signature=6eac255663fd2398d84dbb4371ee60e2c91a27976aef5e90f895b02603a36994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
