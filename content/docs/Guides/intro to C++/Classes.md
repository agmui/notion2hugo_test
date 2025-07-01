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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CYXIXLR%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtKZH7SEZFHeWdFaHzK7GD%2BW3I29KE1pMRwt13i7tlbAiAuSK25QYmLzdQ8W7GKAPLFSs8pok4B90%2BLSrrIQN1YryqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWiG1coiDE0z%2FO%2F6nKtwDv1FPO%2BK9mCffv5VEFfNNaKh9EZQYxJvjK4pI8g5mgghNUesUIxppo%2BvxcB6JbeUdqo%2B1sMqM%2BTUvxBi43TwOWE6ywlczpv5yyqUQP8qsvPOv0BpRYq6GrU%2FnVP6A%2BJnMYdNJvO9w3DYhhdCd4ulwe%2Ff9yemKabq6Jz8lRslumfD%2FtaiBx0t55WtTGUmytxmuwdiWEmCJlbgxv0LRxxvDUuQbbS3FWMK3UhvxxFsMGZnI%2BUK5HUz4OyRH5bs8AHWIEa3nnyLOIbXrBCoYYx5AVJgBNti3AiKBFM8%2Fvn1JW%2Fze0z1tT5nRkIOR90R%2FAqRWhhCeWg4HVKhoZJKXUVm0czCchyVm5EACZNIy9lHZg7LKOWu0ndr%2BiWodbF6A7wOQEsTEwT47vLEZfk2BLB23u16Mt%2F5SIwUbtBaG0qbAyRmWRyX19SvqZaNrXS1EWyWfBz8oI9U%2BVPi1SrZERn1nwJq4YwMNU1Wt39IwZXAhyNeUsfXHxIQBBYmd4O3DuMMly07%2FuiFVPaUTFy5wUswnYs4qd1MSfVFxsxv91Km76bcKMsIbUzy5NszSGKGRcKEUJl47l%2BUigF5ufcewTZ2D4xtKji0Scj3qAHQDqtnDv8U4WHUgXF8YjCaE%2F%2FUwv8SQwwY6pgFsMACWLdjf9jJgEY3vNv1EYvSI6uL3KSP6YQ9nTNKeQBYpLsTbYdHRjvzY0DSEFT3Q9uniVHMQo349%2FDq7mlqD4mjO4leRHVju44NlRD7vrZb%2B1PVv6u1PC2mTJjpmlm%2BKIjV0v53OygdTIEJxcPJBQEXrP9gFndaHcs8iZkNK0yWl3Vmy6qXEmYfhEb66NUXkLGBb6vJURwc68n7pSsVqt%2FOed%2BAO&X-Amz-Signature=392b1211809bdbe22bee18d9d80c39f5ced33cfcf85075242ec9e0970e22dbca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
