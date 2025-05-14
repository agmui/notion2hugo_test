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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IAFXH7A%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDfkQzPJiQ4Lo9mqa6juHLLebiE5JfUB0MLeA6LR%2BKYvAiEAk4hwlzCut7WzgT4m39D%2FOX73hrNpBfRqSJ1gjDNWwxQqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdHK0fhF6fCAJXUfSrcAzVKOLn3tWBdgfbvVa2PEKY8eR5IBR4gilW41omrqudUCcrhmirzLg7O%2B3fFXGTmfiDO0Pkdm6168rhXN%2BvIGdMIc6K8ybwuhjZl5kue%2FT1YhZdVtfn8ZtIivVSj1DPQQKd8upC8BFxaDf1yeJUvsj7apGjZ6m9AFhWUEEvFGBaCKMxV%2FTkuAgP0gkkuWPLVvDOOwzt4nQUjzL1VJrzw1x7SZ5ilr58nyI7jC8TwLb206KyUwn3crxDXB%2F7OQvFbYBeZWzgRyezvwPcw7pPnANv6K058CV8Vo%2FomLFTtTZV8%2FeqqqlXOWr88%2FCbZ7su6y9w27MKNBGaEbosuiw7JbxamU%2B6hpXxefZkE6PNxwDxbKcPKSzFIGJen9AU%2Bfjx8DMIrBKrYpxwgMJS%2ByMwoxIyzZv%2B%2BPeIbP%2Fi9XiAvRrKGb8rjhgZXIWChkkVj5Bgnwlcf2HzT7DRIrc%2FILP9VUWFWk4samlB%2BXNI0u2Yb1lGUrSo8X3uvEkb4UWhFizTW7uUpHJX2rPMRngQStWyUde7xFL%2FGJSns8w%2FtYFLfbje971g5YNhJebXURKgC5jOZgPCSCopfYTJE1hlYNGUwm0pMdhtalfz%2BQGCwaKAS%2Fhjem0QasNPN4TKXgVjXMOmGkMEGOqUBwx5TUrw%2F2VdS6Y6jutHdFd3OSnOoROTMQDQvyp13ZB9q%2F92rLmk11FyDySNmggTxi6U2lJaHA%2FxAasqHX5SXP284DaRyz%2BLeIWL9hnrqb68qj8sJjS5t5DAvk9hVi7bO8uinPG2V6lQq7H3zr6dq9XQZKSzydeaRut2RbInxDjftxxszl%2FGzoo%2FC8IIYCl52H6GEPXQsj3F5K0fQZas6IGiZtt9S&X-Amz-Signature=cdb8673a6fd82d6fe1aac5c2a4b34d0958a2855866381ed77237b306641207e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
