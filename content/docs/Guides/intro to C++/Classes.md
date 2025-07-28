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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H3R74JS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICHOazUMVf%2FstV7%2BmM%2FAFfYYZ1dil6q%2BQPtx%2F9fh3fbLAiEAy7jy4LpsYgkBdHsr8Rxm8ocIekdFdpyFh8moap%2Fg54EqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgc0RQFhBJ5qj9xYircAytrTLOXjjsLigKgcqdJ73X0vgtAAIzBXx4%2FFo6dhXoPZGCAD8tjTMcdVRFfqxivfVgrC%2Bq7beH5aA6FBBzXW1eKK1jKgi1YKJM4Sr405jQRyuazwPx%2Bxgs24b6qiDZycIpzSbSgHa8f%2FxC7w4uumnwg8Yqr%2FJe40avvj7MmimZ4M%2ByfCFJqmlEWf%2B7fpeREq9Nc%2BAZ4IyP4uitd8XTISnLaGVllMrYZ5xu9pw4wCXmt44QXbU0mvwK4JfUmTDudmjvY3TAfpA9%2FRnIBRIufJQE8gTVltqDoL2CwwwfYeorxG3%2B1h3vfwzQC1u8Lh0ZVK4crRwbyYUaaCrrmhT1m7rtjKvBQKVDloCExXhMtXK4vnctycLm9xpbPp5vODVBDy2ineGKxGlOBJgpn2GEZEQpLmzs1PuVORe80GMbd08qRCaF9v%2F8wAkzH%2BL0gMhWcR5RA8sLbBQ3U20WpDoPRxZxVvbOLl0ZVpUSx%2FtVNZcKBF2NltA6Si1li3lpKMrG8es1VJ5MMlKPGXUF4%2Bor3jALm%2B2L%2Bj4QVpVD0ngcHAw5LlMDNrD5A%2Fr2KZg26Iz9EYutSLZj3XP2GtdPP%2FHaH25FGrHkG7d%2BOvyyFBkaUDKqt5pfKUQ1Dnj8eseivMLvvmsQGOqUBoPeu1EYa6VdM4DYWmvYp8fhbRCVLqMpK5g1YV4pv8QPE87r1yguY7EOXJeaiLWwOzCkJQ3AcV%2BLtWsclfF2OsRTO92aRLW9glxk9hYoi%2B0n3XKgdkw8UTogSsMm9sEA31DR79rdo7iALQ9Zl1vraK28M3KJCTRAyYn9jqDUwTB0esyc5bs9xd29g4gCKH%2BjlOTntn4GP8PBoRP7ergUlDu8ax6d7&X-Amz-Signature=53dd6810736feff857f9d1f4094f53856653b383806090c4413da7319c250a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
