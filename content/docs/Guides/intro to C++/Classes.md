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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBQX5Z4R%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQD4i1xyBTMkDHA4xQeAtZH0p4Zo%2BOTq7VTRfl%2B5B2vhygIgdXa0r1srKvIrRE8r%2F8vSHa4nyEh%2Fr%2FAP6nvST1qq%2FbYq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDYoJpF%2FvK4ts6SV9CrcA3i5EeMDOPkYwfUAPiEyo9xkQgrssc1G%2FCKOIIITVnFx2n9AV7DYjwxn%2FTjuRiIlWZnWnS3RG4DhvQ86pgB3ofh6HJgWVHQwrtpPhZYmXn4o%2Fk%2FcH79BEPfaOTpboma5weP38vRk2aA0xIJdelbaBqGaJP0d92%2BTzNnx6cCHQd%2FMb4mSUTvs1fmMNXoc%2FyWo16V5htxwcXdt3rJUu%2BspmNmBvSoDZSo2fMH8V9YJLf7%2FKz%2FHg1NjopJtcPd%2F1wljm9yO1rZW9OR6%2Bvzz5OCNhYBWKar04G7iPbsjOTZ3qF59UfWoLHasbDDmOM7y0ubrhYiwkEQiRyHEtQCsHXqpSxLMfvStAKfR8MUwkrvHfipn5to53k0aJ49yN9zJujUCyepGMW1v94dVv%2Bt%2BQRsN5EACMTKk%2FC7U%2FsgymhOqG6lNLObQ3iQPt8zEBGDhdjqKpA2UGYCXtU8XTrKZBOOEYWAOgKBnD%2Bwk%2BCUzuPvSVnQitsIzbPbQbc%2FBFzdzv7DjNZ7KVBcGDJouU6xMF%2FdJ4E%2FoS3di85RnvvZa6kP6sZpUOuJqrPqg%2B00giqI8Xc7cof0U9PcL8GwkWd37waT32WOczl7enhq3tsLUZPT7%2BRXQ5KkwQxqt%2BupxfNEwMM6cjMQGOqUBvIxe5%2Bg6kQb6aM370fkJ43NmQSAt0tPgbzums4RHaTxu02rMHkD2mR2MPGCq7AtYoonMoGEfdoRvxleTs01MRNdnyDQZxNxBRIGW9vTfglm0qJidC3PSj0m2XJIYJYrkFT%2BnzMpywDsZXlyZTSC%2BIRC8uN261ycI7XoKFFjl2I7Y2RTycofs5H0s9XRLhC63CPsml77aSEVzds8upmIzi0Vi3Z6D&X-Amz-Signature=121ff2f6adb38d63a1dfa2a1d913ba34c79b0a8bd88104220ea02d4e97832e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
