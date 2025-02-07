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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIIJLW6P%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCQwgwqUmAEfd87vmxgZgmRf871yZ%2BuctWZKxJVzW%2BUlgIhAKiDz7S7z3h0ui7eVK3HZ6joHCcP94SBXA7rqIVROm19Kv8DCHYQABoMNjM3NDIzMTgzODA1IgxvO8SqGB2kq3ioYSIq3APkH8xIh6e0R9u%2BAxL2V2Y5m2y9IacR%2F%2BV%2F3oU1cY1WNFiGgxE0V8IkoyqAy5NwkXcrl9rDSnayxbQTsa%2FvusdpSDl1pXGgfog2B3LwQ1ONLjW258VPcSWjCv9GaRjJIXgWRNruX8WORYN6jgeEayLSOMpKygRoUG5tKvIHWHo89C0u86j0y3qvObUTzIYArC8pz1kTM0K8TuqIEblyWKrHj8DLveS5zwoXgZ3qR8MuMMTDKQcNZIdBpNeeEJ0TPZdZA1aQpXlerimoD%2F0ow7gdS1JjPRe4SVVYe8M4WjQoda7g4ULQXfb%2FS5KN5qyV6WYsbX1oQCQerkg0d1Q4C%2BBrQvOcdPT%2BqedcoQYQ%2FcVo0XLYWv4kWDIoJrw4zFAftoIZHcQv%2BkduAAxDHy0F0qBcvdPMdnht%2BQIDzFqq9aFiK3CJ2Tg48a9OFB7Md8xkW0wNl8Qwon%2FiY7KseXSRGxwaJR8t82p%2FjqyHcZ7KibIT3fSCN6c%2BXECemCEqrqEGUxyvMwpofIKQzrNhBuVAdVRjJ4F9zJV3yTQkZANUOx4ZHc3fOGQcrtLC4MeqIct%2FCs9bJ21UfvuwT4X3UiUVVDDtsi67q68lLhatWoqeV5VfjxkI%2BnBozvGfu%2BDefTCSjJi9BjqkAYJrjThsoLyHwWak7prnwtYzrMMhX7lvvbqt2cmScpwf%2BsQQ%2BoH4JUSEEodZ%2FyKucgOdDpnXvaHC6BHMZ2p6T4a2TJtrp2oNqM%2Fefl5wn2QkDdQI5K0BTv4vx9fP2z21bUSEqrhJKxy0%2Bcn7HZZ0etjF8Z0goNRBp09c77tkfgtkZBixBGC97zo8OXG01MOXyE%2BiVg2s8pakVi8k%2BKFDepWX4csX&X-Amz-Signature=0d06fbe78fc1989e5b9c68fc937f15c64aa9e11c20d004af063845fa3d899d16&X-Amz-SignedHeaders=host&x-id=GetObject)

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
