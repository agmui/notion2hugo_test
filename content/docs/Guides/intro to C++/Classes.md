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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7KL5YEM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDpArv3J0L6ou4zJJym7kp9Z1zehtEF2OA6KTjLOcnSeAIhALEQnaDSMOPZCszPpIC3E7wfid7Wf9pbeGg7vB1XdQWqKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztOgcmERCRqC6axEcq3AMm5javiicNJ1r%2B8VKMilvm9752r299iUqcLfmcINfsamKCxAGX8HnTYHmN70%2FUKElRAqJoXMnOc%2FMgnPFgtsA6hfIWRCtdT0Z3S0IgOf%2BHLxCzyKnqa6ZHS62opInpkjDk48UDh%2BXhqxZ6bKDk2k9vKjvXnHhghv5OocRq%2FW9OITK779hwBFJLnpOLi70yb01ib9B%2BLGWshFZvrhJ2BfPaCtPE948s2anxNKw%2B1feyQTWkcf4ZWKN8SNFtkYW7kh0LU8o8DMxbZO1iePnTwckoVc%2BS6ulcI6a8abxYev%2FTE0G%2BsSAQAdgeFzR3PxJAlqLSssYDbR3Jyd5dM%2F6ryOAbDHZZnuVi0z7IpeYNb7uJu%2F66pqVquY%2FTl2M%2Fezk2WCKGY2yvwW8gJztuQQx5yRajqOlZE%2B6n7EuxlR%2FC3Q5U5NdWCm5i0jEdrWn661fQBhnbskGjLEFz3QnAEHCjT%2BIrn4Gyw9YLFw5qM7st9sOmt2YJrfMPzoa0Itzc462Y0nWHVzyEkZeGhkf1OZjZzA7%2BlbisAcwGcke3Lne1BDp0ngz0YzoWFymQIFA3iloYnOsyKfhxUgH1U95pZcHP2DdKkmuqkecwCI%2BZKSmjON%2FJy6vRhpN2xYwl2%2FAKezDy8pnABjqkAYHnZvVqky6La6XKMf%2FCqMgvk3vkvffvV3fJgGZ8c%2BQ8W3KuSDqyqlw0gdA55QFyxHQon0jzez7D9xH92boh1dP061yrURPRlPq%2BRgWtKV%2Bhdb9tlyGpcDwmiyQql5ITasMgi7cfTR1E29yLxSkO0sAaPXYXsKy7V3rk8Ra8q9DIjaPW1jn374pXlXgBV3XBT7XuBJGpSwjgPEv%2F5d6RK3VXodvW&X-Amz-Signature=46ca3e2c24084559b4936afd71e334450721f4e23693c9d721dcbba7109e0bc5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
