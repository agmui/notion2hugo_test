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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4RPWWR5%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIELRmUULZMMlGRerJ5ajuMfb0k3J2G9h2vCSRGuU2dhCAiEArltyfqN7BW0xBrnk93v%2FmeQYhdaHJU8ICyY8NyWQnewqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhcEm0lXi5TFJXqlSrcA14qIUBRKjCVtKq6pb%2Bvcw6ATGErdjNsn0noXrN3QWS8%2BPWIWvbHwkV6y3Fo4BkrPsJfbVYSkowAxpbXUPJkWsP%2Fq5hFwA1iYGinZki%2BvTqicY6nWzh1kYvB47gPnh4TbWFaTahXRWDFaaP3zyUjdok%2BxgTWUARb7HqAsVvICRXMlo8TJgX4zexTatU2jyqALETZ8YpEsHwMWBNqE3GGGJ03Ste0uqpVKRA1RfYhoAwuGnoYK3Muayov11ie%2FGYDKIcANieLA4uFLyGKJCfv9sjYAzaVL7YrARMOrJXFYhBoZAs%2F97ZXwFTK8V3AJO8%2FK1nkxa%2BZYas2XKdkv1I0M5EI%2BQggFM4U2oniiEPk9NoAwaQ0rbEPLVX3prD6p8sINEW3iaN%2B5DC7pTGrwrcTXUwPFlxewGzFUXFjziOaQB5eOYvQJv4p3RRgLqFzE13uhvIQu7jJBVHj%2F1KYGqH54mTyh5IQte3E%2Byzpa5dKhjsB77X%2FHSwjCZtZKDx4FAdmCPW4Zwd17tpT8OQME1i2kWOm6nzVLWuqXduc9xMeBYpl7tXkZJ%2Ft%2FGbd6I%2F1s%2FrGV7hs7a%2BJfHB6iZx9RBggfASDx%2BRGT7DX2r7sRd1McJxVbRfcBm7%2FRE0DQgK2MNLur70GOqUBX0qvDC4WyD6yjumgD5QHkRvOKM9Z8Luyl5zKHwtmExiPTonm1nTlifunFPTqmMi30IcL6QOO2ksY%2BxN2jgqbmoa5QB%2B3ZBSn7HEu6TeJyNT9qKPC7vxHzq4uX%2Fz5eLy5Dg%2BwL7CjL2JI1ksI2KAbjKd3htUldmUf940m4H9tGG6RiUQJCkIHmY9Q33XAL%2F48C%2FnxJrNXYqAmRX40uA%2B8NljH3L02&X-Amz-Signature=fb00cd130589f7d48dacc70ffb6692b3d6ab1701c12d707e3d9b5a07e026398a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
