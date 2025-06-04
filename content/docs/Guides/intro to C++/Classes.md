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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFGWM46D%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDnDqB%2Fd499Jol4mZV4leHtGhWIWc5gKAGJIHBZ2dIKWQIhAJj4LPMBBTbyJ1v1Bcu89Wy45lw%2F3xRzauklLLMavalYKv8DCCUQABoMNjM3NDIzMTgzODA1Igx1C8jKubfoJwkqNz4q3APprrIguK6UEOnQzPv4VAt26vDsj1ZGoL6ztCpEhNubfCoVPS4DcSrRhErwWuitevV51KikuCpMcADoUTMrpOj70xQEBM7aivQUCNj83mHPFB%2B9QObo3MBikLgni1nEPf7azqOKI9TnIoU6eKpvXH9rPQVdHouDNda4Og90BMOXgMVR40MEYJrzF%2FvxM5nxi3rNXASt46yKvddJuPl7NsRQ3XFuHE3AgD6nn7FHjZxhWfOaazTAo%2FahrRi0Vz42uXQ7jcna6ZieSVoxFgVsB%2Fl%2BQPUMlZsjuNU5z9vHB91JcjpyiEL8d47whJamRHsoC1xIu13kDk0zV8%2FhBXae16UFsnG6BPdb1anqkUOm216EeBOd99WbTggmOW7FakthZVj4EmM48uGtptQR1kYnqKDl1I1H9jiVZpzeUudexOw3uatPDFx8i0GLCn0dhqUKPp%2FxQhkpVldLnV8LfCo7DmW6I9aVTnL7VU3odMucydFjNENJ33TydAGjaOxeYTBa2GOl%2FxtgNvWrskHCzx5KLFQOAEvj%2FA4QZmF%2F8sGk5TMQFRvd6LgXYH%2FkFAIVLZZ0OCJ49OU0Jgm1dhc5a88j%2FapOR81Gn0gUt%2BFCBN0XtUuw5NTGqDG2Tcrul03L6DCniP%2FBBjqkASSo4VIB9x7e41u9WJtwO1oS6YQPKdz4%2B03z7nMwMNXfHxALlhKtDe%2F%2BakGoi0yVvWOa%2BuY%2BYJsQ%2BiGlV3saE13tRlHUE0lcEQCgWyNGSjwzpZLjUuzE9LNz%2FW7QxB519q47vJ4kKCarcNbwXmXOqWKGImpy0GOdvRIG9YdRejUjL21964oWMi0VnSLJDqJL5jHRl%2FUbeK3kqk7BhFLBqrLhHDvl&X-Amz-Signature=b2b16a3525acc61a5eb91f29cb139122b7009f38b0109d1a22a992ff82658956&X-Amz-SignedHeaders=host&x-id=GetObject)

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
