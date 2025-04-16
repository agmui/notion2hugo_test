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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W35QU3B3%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFW0%2FIdJa6IemKB%2BCBDvhMFhcxPE4lrqTC04H6%2FV9yWbAiEAh6C4RXeXhEgBWTef4OrKUjk1Y%2BHZHH8nnnruD6Lw5DQq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDAuhAqQ1EkSroY%2FXjCrcAyFx1Kx7580PqUTP%2FemAhB7TUmVw%2Fjp08ErD1xdYJSeNY92HeCDPwJN2T5%2FSYRDk%2BWUnAbuqkl1XWDs5%2B13zXDUDhF7GA9TX9Y9xvRrmTYwcC02Af1ElXwPSxoq2m1VEZJS832weayqKsJ077Hpqc0tF4j0UdGeZ2f4h6AMjAOPnxVbOoKisuC7wEKr3tdk8P%2FWbEWv2f%2FezlOGS%2B6IV6ozrLGhRS8N091MOv8bGjvLIQGY6AMMBjrMXIVHOq%2FtSe9K4NTG6rLMWkB2nm5GSMLq%2F9RWtdgZhfDyz3bDvrsXRZevJWR2BbIYy6xwjlfyRvemEWqsUTwYU2JLJP0K9VbT1iX%2FtrqqkQLlU33aLK2cSHjP%2BL8Em8g%2FdSynIGKUTd2VZFdg6vZFb2Ia8IfRhw9uiw9En%2Fi5ZM0RFTb4OvlbR5QMQuqIUtt85zZjDrsqJfUDWNMsjWsfLn6PmynnYdd8XHFsAiXdB2OgwK4zdkdCF0vzHnGPfthwgDNB4JBRIRkWt1azuVZTneKQtSEtdz3%2F1uunF7gfHJIBp4U6snlcqn3Azt8tytX7lbOQ53pAEs3Dd%2B%2FLKffVvMTH80JwpH27hiHgB4yQrZk0LvuTNBo7uUk0eS3dh7pFrZp8wMLqTgMAGOqUB5BCniOK1P76dPECtsH18WwF1bQ5t5H%2F2N%2B%2BkYiXIwtg8PCVkt6015nLcP9XfVXU3S8VeOXC%2BCKOfvmbhspdaetqnALKDMh0xUtmU6L4COh%2BWTAdhV5BSFJMVdXTR%2F9dnvFOv%2Fyh64JxNTKshUJahCqxVOhjgEBnWLiS9xBoOORRuyCpBc54bngZ6OPzTvdcLJ7nYatu3XkCWgvLWsxKLXs7jU4G%2F&X-Amz-Signature=01679bc1f65735263a4fb1412e1999df3a123c4640e3d9b2ae7bd1435b1f4ae0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
