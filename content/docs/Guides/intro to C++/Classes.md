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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YSBDCRV%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T100721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMvdTsnkabuhe83CR4QhPcGeNkcOzJCbsjxggRpRwCDAIgCxra5o8Al68e3pZXc3jbZ%2FNX5643agnzbdxiyiRVWn4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPOZK9x51NZ57x3tCrcA1VeuwPRdK0rUGLlaKk8kVFAgQA%2F7%2BnHBnh%2FwheYpjW5sIkGdiGIQWGJFI9fIvHeeRH%2BH%2BDuVHgXWwKXgDq2Cjup6R5qUXAwEzvDTzm1%2FxzwqdDMdDIk7pvAIRlfcVocspgQnbqm31Tx0%2FN2BsWEVJS5JTHxfEFreA8FjLuVW3FCe1Yu2DjSa6yVj0%2FFvpXQYo%2BTsWRp6cMEMKmP8nKs%2BDkXvaWbAyK%2BilN5SvxcxZdGjkTPUG9NLThk3S0%2FHLLrexnfn5m6gJ8CDYjdzdefw74xE0tkAabA%2FQp%2BcfWTl0Lh8sBt6ho0cQU%2F80LvkEba1xxPY1ZvH8M%2BLFO24iE1aUSuTUBJJZ1woNioRDk1ubBdsQ83KsCMhPUhQ%2B9KYaYtcquW0u5vt2JHgIbPASL4qKS2MlhJrrufItjrIed8ix59ikDzFCRHEHAJI%2FX1OH%2F8%2BPSjPsuJxDNRF%2B8xt2CtSMl2VAi1tTbAIArHPCFTA%2B1pYAILklQ5CTUEaFAAnm%2BMtYGukS7F553ob%2FF%2Fp3qf6qVTdTWrgSyDn7OxhBQdlL45T4e7cmfnQg48Pj3JBqi4ujqrZgMN8DtKFg5c3Z%2F3SicR1Q95Vo9TppvGPqI2Q8JUJ7UosgtkXVfFK2TJMJCm97wGOqUBIHkwjsyaTSRJ8IM0U9OzPf0fWQze9IkXnxPrqxgw%2B447z0TsVOIkHLg7yoOiJyHxX9jLAGnqF23X15dkrhffYRjdsHMjA5f2Ip32sptu23DHUC1QbH2RZ9zAjMukrrqTdrrP2SiTMJHPEOE5%2F43wRj4gAeQlkfDPgWF%2F5u1AJ6lWH7XOTy2mJJS3MyqR5X2ZY18bYlFPmnECyaA4jWOT5lDeuU5d&X-Amz-Signature=574373e1bc4036fd91f2ca0e128eacef29e6436fa76164f9fcd6110f7cfefcf2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
