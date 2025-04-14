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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q56IPYMG%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7iW29Jmn2iEpBFZb2cnGgcXLUZFfpgVUuBj6wgKolXwIgKqqO9%2FjB8trh1wiPUf3vz6KNdRyIWIV7KYWWPI%2FNYHQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHq2qLpWgDMJDQ6AyrcA9HKi6ZXmESyoJ2a%2F%2BGsTOoWmzvGwd2MWRt5WqNBpfbm8bHTRS4T3xkaDzQcklR%2Bif3qwzlEreg6HE4105ykS8DKXQzVHz2G7nHeJpCtW8u%2FkZTWdbjw2gAtyl5g%2BnKbL0%2FuFy4cIcO%2BiigVULDNgE%2FgMSc7NL43C8iR4sBIikGypvadmOUjxjZwyKAk37%2BQ%2FWEtBrzlvgKqg%2FUjp4lCLN0zqx7J27AdgYz1OGhf0%2BxYWkd%2FbSaTKUxshnmGR%2F3ANA7UWzfxxSKEGBW6yw17Y0j57zbXWNyfeZ33BKhZkvMeeHuVt4OwemEZ5%2FiaP4cUoTkhfYVfLHP0M4GyE35VwLyS7Egr3eItEmlRnWWt5gh2%2BUebiEduiyQwZh8TqhIwhHpTaQKxgWwZ%2F2%2B3FDhelFbjFEJN2Gc%2FEOdhnjxVP5qntoqaKdmBEAp4X52moV4SoSnTVyQRrfQMcRPkFTELDbk9XB07GF%2FFWSrIOBjYzS900n3mS2zy7o9AUlaGGUQ%2FWlQa99bSDKwoPMZu%2F71%2Bw2nGZSUAlu%2BOLJCk%2BTRwAEUAYTMxnaykoMJOfWAa6kdx730%2B3kGN8NAExLoaXejpNLUwnySyrnHiQpK0EvvNWPsOjWEK6ExqwBrY4VXIMNeQ8r8GOqUBxuHnJ30E9Og7XnNX7WsGKkkyKEVTKAsVxH0SNN%2BCHBiqJ0U6Y4X7zZlWvkL0GGtOCpcK0%2F9xwxDj%2F%2BUR%2F5IvU%2F%2B50XLd7syonWWNuzyqA3cYHhLHVquzMRK9PrKSLzYtmJ3JKyQTE7Dc7VjfAR%2FPM96eQnE2WR09C3QPmckYZPGedKpyxC%2Far1w55x4julQj5jd65IjpKRMzfdQ8Zlhn8mj%2FsZr9&X-Amz-Signature=9c8ab2bfa015f8e93551c4e5f0e8b88c9e14f64608d42b9f4cc4c0f80dfc2b51&X-Amz-SignedHeaders=host&x-id=GetObject)

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
