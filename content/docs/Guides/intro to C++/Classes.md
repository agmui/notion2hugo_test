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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JTGE2B7%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvjz4MdEgfzdkPgc%2F4jIhh%2FgxAJboT5NAGO9wAuVD59QIhAJY1cEtgmi7H%2BGwl15eKrEO1cLi7WMQCGxn7YeRmoXMcKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmJ6BLFDU%2Fh7XJFAEq3AOpSZNmzkfPGHrHj%2BNW8Z5KPY75mCc8hA59k67H8iMT8Ec8UjnNQw54gQ1eJDhPs2OZ4XTTCBricXpDbL2s097VeYRtwei2SWPXv6eBnTk4WCCcw6Sy7TCOgOUF4sRE7R%2B9jgDzB8oBr37NPMzJNXmwuAZyYf3IlWrmtUtsxdtagYpjSr1EZ3KkL9Zy%2FxJiVId8qWTUFrgOJuV4gf35pzWt%2F%2Fs%2B9O58VAL4ennWPCCaO3R2%2FRI%2Bpe4e81JatWUw2DvGb7OFfpKECOGjKWjc%2BZj9%2BJroL5Yx7rBOPkhH29PKVWSCwFLeGQ1kMEmwoOHVzincE3RWqIuebVDYw42dxeszqEw1qqt8mAQkpjNrF2ViBi4YFKBUlbVGzNb7IZ4G7ixhiH4HWoAjmcsxBmRZjGdOyEBr2FNqRuk2kW7QXWugNhI%2FZPGwLlHLhdanvGv%2FzVIbWL2ctrBv%2Fy1CHNtsUr1MQY9mWTaSIjDk3IE%2FBZwiVbFnnTowL0j%2FAUO%2B3RaLgz30SBdhXK83k0zgIu7onIDKWPGW1FjXSf1W9%2FRZ0syIfBDyimLwd9XPxbT%2F%2BRzIfGIhXYXHKO1bd8lKq2nKzUXJAmsWa2Ic6GrnkOqluM1Orbw06jtK6O%2FzU87LqjD4nqi9BjqkAfF%2FvJBmUFx4e90nOQSmU%2BXxbUsecRoepMjRMCKxy4w7Emf%2FJ4pZYLkor3LjdYf8cNEl8WIkd2Ml57Jdh%2FJoxbLXUjQX7fxZzPvotc8eKlQSuUxSKTGhOynna5FNaczgS%2BjqDCh6IbN2WIWV7PHW5G9J5SEuU%2BfHiBUwxVxuv5rq19r%2B5Z7fSH73yQfWSwV3FRkZj2%2Bt24AXaFxokmz0%2BKvQMpgL&X-Amz-Signature=b007396258de4da18ecae2655897f7e36473713c2b538259a37c8b270ea0093a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
