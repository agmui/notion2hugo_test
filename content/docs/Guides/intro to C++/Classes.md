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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BVMZCX7%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5BIICF%2Fzqjb3l9wf%2BVhOJTsS%2Fgh9g1q%2FqKSrxUrUv8wIhAIQG5Z7LymTmdsLQ%2BdGzWoBVrd3DDIC7kAzdmo3SeCvaKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyB9%2FPrr38xDeWmMhEq3AOX5z%2FZ3aiLUEaluWXefxW7zqhBFsiAAAgf1seiuvTN8%2F%2F%2FQgx%2FUYNMYvJl9yAV0ZQ0vqdoJisVPU%2B%2Bo2BzIR%2BjaH3CVaisuS2xKgjKUltZy4DZI2mRiSc7TyHJiaOgAFQbLPMgeCNOqvSRClkiltjuIy%2FWTPXwzeLVJ0bdjlgOvcfODc6PVffxK8msNQ8J5CYMr719mhm%2FvxftL1GlMdj9rAtjAWF3mnmwZsX1EQFiy8n8KxOzuUlthWXPu7cxfHpmFFdf8Jh1eX15QO1ASQPBUg1CpdRLA%2B9Nex%2B6J7g6pAh745GsWEA2fX1qQfRyWQskINsd5uq4rUOTmQZU%2B8NWPqgdRN6Vd0NpVylVvf2OOr4aKuyZs2FievH625W2uP1eH1vJxJdGeAR%2BSV47p5o5fie0T1%2FapCqfuI7Rs8dKOkYl%2Fr7LDPqrukDibl5Q9k5RO1bEejDslC2yJT0J9oBVNYcGQuiaaqDDPhvB%2BCym3PUEitDDv%2B%2Bwi7M8XQkJbHSLuCEPrUujH0fN%2BuH%2BtGVsZb9B%2F%2BF6J85g71DkA%2BjFlU7jAguU%2FWbM6JYCN3L%2FRKucFxjgO%2B5hrkXODSsKNB2%2F6UTG8HBAwv7qojH9eD3PJSmHxXV66%2FDXW7mUsDCI2qbEBjqkATR9AtBI24pn4W6bJGMS29tq3sGzS9OgfmJB2YvGh5YrmITKTpEda0RGXHdPoblXcmncwgphiNktfFHqp%2BuZtyUBvpUoA%2FFCTHFU0HbMoxki4%2F9lyvD5Zd5M9%2FJni6%2BQrStIw6VZJvpGo6Ard9utkIuJMMzq6eww2gfbI5oT44vuXdVQv6PjCiuBnij6sKzJuQtMsaB8gSvqvrblVdbHh9lX8hbK&X-Amz-Signature=58b22b4863f38e6422a7c3a9585eb549e48a2ee14e3c987f78bcfb5bc44d6a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
