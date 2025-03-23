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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJEFRRMX%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD58%2FwuIbpIBWPYSvC1wn9bpAUtccJLC%2FYEs54ioYWu2QIgPpDBT1LjWvS%2FPynoPP8P56C8%2F9v0bqr82fhM9%2FD14LoqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEOja907vcVCs1sESrcA9E3FaP%2Fx7tMRvzGlyrCSmEQP0%2FSKCu%2BUzQzxIiy1gyRKG%2BkQYIIye36Jpe6uCi%2BTT5rVFM38oTyqMQaJPh8RoKJXapVFz0%2BkqZdYv7ionab%2B0sXc%2Bu57bFBmt2NWe2f5TT89e8q84JH5FJreFFPaohQU306npmrPvQD%2Fdcrc80Y6FIW1pcgem1aFChJojrAfqc4%2FTev3KxgD1zfDCWZkiYYx1kjsdOxQtmPHNM0YDg4XjfX6rEejLsR63H9f9OHD%2BhP3Xay5OHsnVjXV1W7YGyU9O3%2Ffy9UJt0EG1iTukfSWOrGC%2BVs2%2BjEhKuVAh1g3%2F63eGtCU9Ai3IPQMZvKl%2FsMhxMbVkd6JNLAtj%2Fd4Zq6AeJxKsEPKCcPpZoV1fOVJFlB4oKJ4kKNkqVQDV%2FBQotW%2BAHIn6us%2FgPX5zDQ2Te%2FbFqmRT3NQQA84ZW%2FW0Yn9pIN9w5fZYpmBGuPuhJKn51y76UnXao%2FzramMDudYHUBXyFvuSRCeBViHYg%2FIUEVTITheD6YOaeBUb5PqmglYG6UltII3jLaEKrBeMAi9n%2BHVJ1fcQmDp5TofOS63Hyxuzrxu7vva7a1az%2B3w7B4ZpMr%2BXlGP%2F4OPIeTxL6GapcGtSmHTDZlpG6CKv1cMIDN%2F74GOqUB2cRR3R8kUGfn9UIO%2Bnwh882iUuVb3LD13q3WdqIA005bOztjdjxqvlzfC6apLh6fathko%2Fwv4VN1pSpYUKyNPEcs7CHkz3lM4IFp%2Bc381irNynFv7btqedLNSrDjZJxw3WC3SNNXunhqYjPA0w%2FoDSEjlStiJN%2B3GhoQG%2F1OjZNrc0QOW824hObLt7wlZhd2obpBqwf0pMWrmGjczq%2Bh9XdfU0lb&X-Amz-Signature=c3faf28fc39dca8ee4ae75620e5843350b59550f91f270945632cd183a952fe9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
