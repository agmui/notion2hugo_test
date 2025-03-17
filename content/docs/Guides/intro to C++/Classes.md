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
      <summary>What is </summary>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666F6PFWN%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI%2FOJs1GzMHt1somp66aA81bfmjb0Q%2FgFn2FxB8wrWWwIgQk3Hpb5ve7LdjhUuWcoV%2BQCgDYN9NWIKT2BjKrvXgWMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDBbJnQxL2AP50cBTGircA%2FBVUwUs0%2BHwQDY6Bbc8bAPdyR7N7MPpoBiOySoytPEsVvcDm4m0FYvVCUe35VMEEGJHYTHt56%2F5uW93HJOsbe1iWlFdseVDUgtx%2Fo8KVw0R1j3PaZWbKnONJ3kgIJdNA2ecrAnlHgjpFVnY9B23E1mMiSX1GlZoKZ0M1B3Ar8G6bBdJj9%2BzFLgQWwPvxCiOx%2BdpExLqtSGAW%2Byr2t4rCumoCOkYY6dsZ9h%2ByIYs6vgclAHnPfNStXPecpMGOfiKA33mihNKjAxMsGq7KeUMY1ovonQg1Ma8o5kEcrHG%2FP1dkkw89tqTGnsaIp3UYbvM%2Bz1ipLE9a9uea1qFzPvWepnNeWcJRCY3heCuNBYQbWty%2F%2FCPEgXyO3gek85jvhuLVZxm7cMbi5rjTLb26ryuaUXujGVIR08aHgPXkkwLBX8y7VWA9GLb16e94XZiRYwUqsjYZzRFT9sZ5kIjEiuG7V5hNPcrVxO3pJpmzC4qzvwzV9cVAKHfzG6%2Bu14UQZX8Qw7fYpVucW6mzzONN%2BygqXaArdcpMcRoiCE%2B4S7aWFgrbxByX3SJjn7Rcl%2BbJTi%2BxpnQG2a6MGQwo24wD%2FK8s%2Btl7RXFBsAu57c8KjH3RHEpsPnKS0iAhTUeStraMJnF4b4GOqUBX2u4Qno3fhYFtjo7rWPX0LlaDrZmt4CcNmFXVeJHZCRVS%2FbHK0IMwKrYL64yeatghplx9jju2EQ5PVidGHjmdcdt8AbK6dpAB3m3OH0AtoL7s37nZfD%2FjjOxysnNJOq6GzpY%2FlfIX8xCDcVtyzomrVdp%2FFq3Hu%2FitAVu04rkVWH9lxHgyUBkUMnChrbIdFSc3gTEVOB0v%2FpIjajPn9cCobXDc%2BtI&X-Amz-Signature=f96b6db160cece222cdb9ddd02396a296c1a7ad22ce88b6b3046020ccd48a287&X-Amz-SignedHeaders=host&x-id=GetObject)

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
