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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y34634GM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDui1kPnBFECSFv9ZxJwKi3LV6Dntp8gVY1yY29QY%2FM1wIhAIO%2BRQECsslwShg56jvIfMwk5uZHWr3jOe2wwzaBMBbUKv8DCFsQABoMNjM3NDIzMTgzODA1IgyZf1L5H0EnY6lToKkq3AMyqTFetKjl8XPr7S5GKrXvUAIFiP9FyearqcNhaa1bctisLY%2B0wmh1sZwifnckiNV%2BZGJ2BqqGYZCZ2M13tK%2B6RUmcQUayLkahV%2Fn0RdxbT74DLMekNbXgLzo%2BtwkWVeOwGffS8z3O9WI200gqixgsVac5j7xjhX4z5U4jfPQ2v%2BNyoxvAzcNYbnIEOsIwZSbYS8VwSuDkfEJQScWplB%2FXwsDe8pwzaXVVeSKFque6TaRlBawASHczzQ90p4I0QKTVsoX5F48p9g21mfBF%2BEFEHmMvIfvSDXW3gglqzVZItVLI2g55wvoCoYkv4951k48r%2FbgOogRDZssOJf2TI3SHjxaePa%2FxB6zNF5WMng1aMmKU6P4k3uoAfSi6%2F6MigLlyVETNe7ZsZi3R%2FxC7OKx%2BWmt%2BWIiWvbgsDRoVuK4gYpo46alFH4B3B3QaROxMUdoZ1czvmTce2G5MYth9WIyRRuovOtyrpHPsDnz7F8JdV1Y3z35lvvSE4ILfvKkNjvm1ksooGTv2SdUTNw7CcASjBh8cY2oyW%2BqEAegE%2FkV27CeExJC%2FjmPu7Oy4B%2FfpSmEJi9JKIMQN8kZ8XF3Z2uExiQIXuIxUInrnFW7rn%2BxGRu63FxUeZNkRvOH%2B6TD49uS%2BBjqkAZwRF73vIhlfxM4fAOV9%2F73cCO6DM8En6WEvWBs%2Bny34nnfIsrw1et%2BJxdAn85zdM4gCKuGtpdXZ9zAKhzsHkQSqDkLdO3nP21YLH4CTA9%2FXUPIx8y59HqNQRPPyD6tGhvvs44%2Bv1dcW2Q28%2FsOZ7CQGJOJwFCyHRMjK6fZkJDHWGXlaHyhiYziS9uVEQbw6IkNVNZrpEQr5465OhpwLGIStoc2J&X-Amz-Signature=358007de71f637f30f2a6543b455d8bd758d9487675208cc6a81ae704957999d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
