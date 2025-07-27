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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6AFOXN6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDZI9hQP4pCZGlr98qzfLtDWdPE6KGbkDR5l%2BPSpoxMrwIhAKlxy86LIV4nkZY03S1SoNl6dm7KHVwenKdUljZhzjjqKv8DCH4QABoMNjM3NDIzMTgzODA1IgxGezdLtGCPJ4EF5zoq3AONjEM1I8AGP1oqpIOHudl%2BSlehHWELS%2Fo2ULeyXy2sfcqGvJHnP1a%2BfzAO61MCtzBP5nwXDaTSphXJUwNTWOeC0d6p8o31p49xlqE4zUGzBo2IR9nWyL%2Bc4CNr6N%2BOxAmF7e0F7GiQwV0bQuZ%2FjU9yjrkxs%2FR6KnD8ZZ%2FsxgPNF%2BhpOcxhkZEPMPxJe%2FAeO3NkY7AQMBhe68rw8fxV%2FL5QYwzdSboafpLv%2FkT2B9Nj9HRsxxNlrfHPlIWbkCXKYIQ9joB5eaZ67cFdhpoBeBD%2BfHtNop50b64mjL0PSelTaEDAA8G5fZR3hB8Eletag0%2B5a%2F%2BHez5M%2BwSj5YppXyHR76qaNclsEC2UQVrOgunFQMExyEG1bAwF67luuzTEGbzfOTU9U0jAh30nDniSPrBE3f5aAxb3XB6Pgl3tDVyC0thT2gulvkloQ94hCvRXPmD%2B9ugoUGkP11%2F2FaR2ws4uWPb6teifzfSygjlaD2wx7kbZNhnaP0%2B%2FcNV%2FaII8Ok%2FzD3KhDNr7G0Hdax0vnlLJD4kVih1lb%2Bv9cG56estrFlfMCkN9%2BaJJHIMq%2B7WNAixfJEmGkoQP%2FmbMTkX5z4Od7MsuC0BxaUIM2XYlHhT9y0PD9QN927aFBZEJczCSpJrEBjqkAU1lThqHmQ1L9Xp0XCc%2BL192NqmBKMKfyVHHfaYQ0%2FN920lBM%2FvMrS%2BWhUFstesBBwppimLVIwaFfq7i7zI0%2BVzxVsVxvk0oj27zb34k8KsAOQgavrisxkYVY0s9DUuQ0k7IuTjt9I1ey8KuMKcI7D0D6dk1azt25L%2FxdKmI0AwXiSwDO1kN7sBhdhraj9mprc4d131uQKfmLJkzRsdr7dC5BKG%2B&X-Amz-Signature=0ba0a68a12376a94258341964105fb64286ddff0357cc9cfc74e0fdf6a23e284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
