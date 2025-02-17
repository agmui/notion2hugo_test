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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645VTOQUS%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIDNTwDzYvjFuxDHM7hB3QRLMi6rsa5V38Ch19nNs%2F3NVAiAsW6MuElEsk6GImuK%2Fg%2F6m4iLkkl5IjPF9vTdZF16CeCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMgvHXT%2BRAdJUB1oE3KtwDBt4s5875gHi45jioi6PKWm82bLp8Ad1pERUmRJiF4mLKf60eAa9FDunVK%2BMLC8%2FG94AwjtV8AndOlVlmlae9V0niTDaAApVejBXARWPpOoQ9ZEZKGldtfe3WhnneMNaee8JzJ2ad6l%2BQq2v33%2Bl%2BQTZeDLkcX1l%2B01StYdq7xeY%2FCPrdvPLzjhPugcCHXBLZwnmu%2FVAGYQUSq0668Km%2BjjCoNjg%2BL4fyXRvMWkRDX1LIQjn86B76rvEKCfXwXzceoRGI2AGmk5rw4TVC7rckxB86CById9vO6is0KIhaHj80Oyb8UhFKVfaX6z%2FRD%2FBacp6U17Q%2Byhz%2FdF377zmSgigZjWawBHVcNky3QfC1vk1GQ94pzgHVK5qERCjdlErx7Xp3P6Rv5Erpsa0GH8yEaK4ZwbF1gg6trQNi9MX18kGxxPWR2TcGG56lgU0QCx%2FS5MF6VZ4qvS9BX2E53XGz4Zw987v%2BVz61%2FFIyvzGS0pbApfHyx0ZRIpiYDZ5vWY%2F4EaxdJje1B%2BvEVEHpbvHcXejPKQrYKruLXzP6mJyDmIyXzZq4mziFmFy%2BJENFlDRqP1kuhpfPMX6VhwuKqrrNxGbQXZ28aAVvd0K5YpIpL3iFDk4yF8zt5KUpYFQw4%2FnMvQY6pgEte%2B5y4xwYCYEFi%2BafJh2j9z%2FXFHxBcSabIzRCYQ2HWwpPzluPhl9pYNCTaYHnk8392SZi9oqn9pTIWTJan0wGFGZnTUXIop0C%2BCS0OPdj4gi04LEk4OBrkVSiXOyeIaJaMEaph7c8vRL0BQHyaxXGIpT7WsZg4jtHtTqAqUS2QaMSUid09o8yVNYSDhMGNF1%2BLe28JoLle6dIW%2B5hlZ0U7CVJH65w&X-Amz-Signature=8a34362b1ebe3c2831f26e8bf34383037b30304da9911b19bbe9890b04192037&X-Amz-SignedHeaders=host&x-id=GetObject)

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
