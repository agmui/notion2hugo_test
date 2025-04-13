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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SCN4WTJ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDHWdsCexe8zvRVL0Ibu1wqXNL4u2vRd4cp6m9lxMRM6AiEAhfheTxHvIkM4Y2ezuut9PVfFPb0zdvwaapuKf1eubxMqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDESDsYnTF9qJIABZXyrcA5O1kVurI2JYfhE3O1usPG6Y3MC%2Bmb7kcNvcKgOcyv5GkChupAanwjV38PLwRdR0rrtmtCnpKyvcKTVA6JW36P1PM%2F5Cf%2FvE4GRooMCvkisTlr7v0WlODXeXFvIBZ24kP4WVRLjj7pOsUlJi6VoxsfugeWMXqTt6WJjQRuF%2FcLPOh5YpWd8B1wj9mquG%2FPqPix4lt8HAaao7exBq2uBvRgbyapUpThEwYNYlClrpy5ytIAvtNskXL16cYbSRlPeHDA2UXTZYxE1fS4nHMG%2BtyZJqv47xYlH8il8X694dFnLuGfEufgSMXjzUp9HqSppXfGZxwK0LcxGr4QteDP7ip2q1jG%2FyJG6e7Zwck8oLd6BRt2LqASF4dkY5LB4Mk5DX%2B0LM1YgdpDieizyRFOEvcZOUHbRn8YGtP7fdRPaZT0AeWl5nqipLsSwOpqLMXkgZHqDuPB%2BaejxIgSWjpg4NIlrl3Bkasx9Chv9ApDvam5l0g4lFqlQ7jvmg9Wbyi951%2Fe%2B3XhLox%2BbfFeVggYuCfdCigb4vrhk5mC0%2FCem1oTRiRgPGX2CgihqPRCs%2BvGgPY%2B39T8toCo3%2BYxLagaxOPVC%2FxqcX1gmKzzVLcKMgszoVmhT2KOEXD5i9xV%2F3MLqj7b8GOqUB2PtGtZCbLkRlC%2BW5tNiK6cuIO07UkI14Ju7oFI1fLlEmX0eDxcZYn7KCR4y6JfaE4ek1YAd74rIZWUxWuRe%2FBTRdB2SewX14AUAX9Cfpc9K%2BKjoG86l8FYzSdl2Fda8NWMBdTMWon%2F22TCr2yxn%2FxrTMMREzxIX0WAON8BrR5A2tCuAAQqKzkP6bTeWTpGRod2tBNMDzGLPfZcpKLjjM%2BbhUY8RK&X-Amz-Signature=f923c00c278c56dca57f217834d5233b3edfef747035acbed181b351864ea866&X-Amz-SignedHeaders=host&x-id=GetObject)

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
