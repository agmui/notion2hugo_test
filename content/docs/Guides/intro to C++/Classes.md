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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIKU7IXN%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkLSO5STNrabRS68XXU3VcPkSeN8Ey6qKnqJJ%2FEV7U8AiBKJpTZ47oGc6x1nSDQ4XSkLLY0huJmY88F32K9bnTMsSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhMuo4rSg%2FNURbKhDKtwD%2F4repKB0WeJn9U%2F18%2BGsuw%2BlFvC4S0xBerMf1tsoZlft0xyFEv5FMCLlT58wJfN3PK%2BVJW7pYXwGSo3sXZH2qEhFOsWXdg6u3g5tRBmrmm%2FBLMZvooeZJaYWJR1%2FOV1LJfZyHKvqziboa8%2FCTqZj5DjAZSLzoteadGtR6L7fLkT59nenOGcJ6SW7tipeR0vP8svOn9weSpUN8vwKcbI0FfQEX4mmCVNpF%2Be9%2BpoiySgN9YoTU6jKfEEtKqOsG8oH%2BD6WVppwVydt1U0EV8jzpY7TpocrGYKdsixopF30pKqafoXy5FsT7z3WnFB7iLByUdBDJHzGRGWYef2Mh2R18fyKOtQOUBU2gje%2BUDUFiIKKsvUcTk1z%2Bs%2Bq84MaV8F%2BAmKKomYOLYphwFkKwAWw6XFqHIRiuxBQR21n%2FHudRE8UyzNgiTQDD%2FWnhii9EYCa3j%2B6Nhmg0eY399sdVArj5yWgN4n09mumioEsPgOmJWMRFPsds2R4gbwaRlpuEcfn0hFLx6tGdib1LS88Dz6LQAWyQGhTsrpQxsWsVxsxzum8nsr0wlu6MBfTdBHNm%2BBuURXZHTvS3jcdmrwey1Y7KRw%2BeGKSFn1tpF24wT4aHPHO7qmhiVT%2Bo2JtJScw9sXswwY6pgGzzgm0s0NkcWJHKm8FuUZwXjfKfiCbisp0aR%2Fdpw91DGfLs5dWCXiLJP5SgQwLwjCysymQLdG7gSzcVRn05TsnaNuCeJxWXkeWWM0TdJcfo7od0QIN%2BB6KNfJOfJQi%2BCh8hLmrXKhJOyr6cydFWKLWi8Xk4paCx4e%2B4%2F3JxSFAXTMIunQEaCJk0PCEbrYmoRABIai6qvj%2BcYWe1eoAFzdDA9%2BBrlkg&X-Amz-Signature=30bc054856930d270781941f4bd116bda6b026601493b9494b825e1367f701bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
