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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXTGENG%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfbVk4eHOowOtXn7UE4KxPt5vE7KJEm6NdynfzwGFbBgIhAPWkMdzO90rhO0UYoTwACasZ%2FzKU7Tca6NfK9gldTK5NKv8DCDwQABoMNjM3NDIzMTgzODA1Igwc8pv8boNQqJi6T%2BQq3AN%2B%2B4S0V14EZOhr6t01a%2FguMoLymBGcHOXfDX7hlQSxWqCiPVQcLBoGsjOf4dQ2d4kEzISQOCGhBOZyC1MGQhAHmmEQy6FmM04NG9msjcpT0FUfH69F7262CG28dY4DpX70%2BEJprscT%2Bj%2F0Iq3mqQWknxNVk3snBIfJzGmx19IBM3eCMzkkWrYu0cflWj3KqCv9w1YZkhnleprdyw6LEXQ66gWZMFyAZzmDCJMESulTRdROlYk4rpt4sbK%2Bw0mKpdH8czeKgyWgwrHLvV%2Bvuru3BEF4fIKtrV3ir85LFqozPR%2FPcNPD2UjoS649BadwMD7EBE8XASHejtD7%2BhGXVLXnM2iy9z8lK4tQe1n6EFngnYHPWXp2%2BUBjyVL58ONJRUsX2AFFXbZDa4DZCIDf4M71w2VM4B2Pr6wXRWQjYdOE%2Bt7k1BMtiDOP5UUjOD2MgDEoR4n3Ak8hYRQp%2BIcRpKk%2BRJezzA4ydMzSFjn0RZAKCO2TACFLnjxPqN26%2BcauwhooGCkrKPA6YYFuG0FNtrMv%2B1HT7owCBB5FNcL%2Bg%2FQfg6GHrBTS3KIVb%2BM%2FKvZQffe5f%2Bt4GCWXtI9YDE%2F3s%2BTDi9qHOyPS9daIhkq790FInFHm8iOBBWYCssuuKTC0%2FuXABjqkASMB1hY0nPUrTZHFThUng%2F%2Bn9pVjg57nPBEJU06OZIhftUOia2tFEKTofwz%2FEMBWEE8FbPUqt1Gdd5LjW18jCSW3qdgTon8nxYfZconET4%2Fx9zMZ0z2fGCSPhmV7izYs4aQ87%2FfWfIyC%2FBkvaMGH7G%2F9TTcInd2pWkhB%2Bvd5IkS457LkgpxjyG%2Bom3X8Y%2FBj9r2GnWOMtSRz5fwcEgHLK0eLrWy4&X-Amz-Signature=5848bbf347c0967416849a7eaf7909a68ba547721195c17c8494f010b1117a2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
