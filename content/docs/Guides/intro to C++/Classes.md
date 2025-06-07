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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TON3TPK3%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICd1Sr5td97ArZfFkACpVlWpkkVRtFaeY6103G%2FAZhgiAiBDyTiORDb7zxO6uF8ih3HeFpusPqfkCA6ccIa8sK2SzCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMrSovHvu4GpG%2Fh0jcKtwDbPQ1CEOBx3JRIghVYvE0fhbNmtVGMTJr6csBN7TQJL4yAfgQX4UASouTfZrffwPZGyqbHWWydj8qds7GhtXqieZoEbSy3ENbg2K6jfscgr%2BIJ%2FjpbCGr8YaukVtcce6zn50uwZMVhdCuDi8ZfHfebzmJKf8zBqD0ANvH0W9QmyPqGR9qz9HcKJead%2F3Cwny4Pnj9qqHPRHa%2BJ9igrfQDVfzTZ2zD1uppZwTJb3q%2BKoEudWALGdT%2FItgxAiYx7Lf%2FIi2MQ0eJTJyALHzQ6xpET%2Fl9YPCr8wmqQNfDxOn9TITTkmf5fw3P03C9hy5%2F8HxBWgW992QSBJ3d7y%2BsrjmqzQY%2Bf%2BSI09kl0xKX8uTeXO8FJWNLA3F0V9K0jeLuoVotkpek3XwGXwA8MHqa7oTvvm9rDZkaWoyAk6nZVFy5mjkkrE2ZV788XmkHgHGN7BXwoWNsj5ck%2B9Kx0s2%2FHfRrezYTssEx1u3Omqs6SGVHHu7%2FQjz%2FT9E6Dc6iQduxfz7E1UvIngMtqPHRv9cnDIGsqAAgUbqWs%2BGsVL64ORv%2ByN6xvPt%2ByvLgWCaNzgxEFz6CcfnHfdOO3swvAh0aRiweARsU1ymDMtRN31e8rXt0w5lWVqAbhFIXtVcaYPEwv5WSwgY6pgEtvX1u2aKX4xZ6qnkac211bQqcJ8Ssds%2F45UgpXMQSPwFHRmNzT5FyxIyDQpa47ZtiVyd9lz12oB4q2y%2BctSwLqyl4gQshjZ7b5tYuXQbnnnD36KnmOIp%2FTcu2h8d8ZldYR0mHbhP388ipfXnhn9jt9%2F0DqnJQDw3Av5U9BlxHhA0Lw3PRVPCp2wsVAx4mwSZSKjBqqN31Vft93rR8XHnfGIGDcOc2&X-Amz-Signature=457638d6ece659f29ad5db9724c3d5173531fb5dedbbfbcb9f952c974cda63db&X-Amz-SignedHeaders=host&x-id=GetObject)

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
