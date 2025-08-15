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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPL72D5T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIGLMVRqtjK55B0Zeg1GT8yPMxnr0egqVLqohxYs7hBh5AiEA0klMtXisOligsDCzQACj4DEMXNdeFCJ7WpkVu%2BJ6u%2FQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBZZRCjXMDQN1i%2BE3yrcA9vNC%2Bz8LQCibaFc7usGbJo%2B7JW18MiWHtYjAiV3fZtxZd1QTIQevsgE4yhPvCxswd%2BQIplFfZG284JmQ6rGcjr9teCjuhhTejNjicGHAseKHH9JdvBTR%2FRYujbJNZa372arhdqodHbwptfgGCTWQLMd6xWROwYoyQCyqaCVx7LrtOnm8CEZcx6Z1k%2F0C8V0rqy9jXxolQuQ%2FL2Wvc403oWrN44UbxdqxOE8DILtrMW9CHYtaTqs%2FB46xPr0B2jVLNGTPaef%2FcWdN3Bmyw1tpVwcNWcGuz0Jp6%2FwFSCE0Xg1Dvbhau1jWEdJ9gYyPqmJt%2BE2%2FRjYCVrRwBzgwPKD1lgg1ENZAddO%2FkbzFv8hx7LsEdmgoB315s5nYvzb3VKGN9lWvV1ImVnZjF4fnxl1nghZmcw3n81zrzUkAa26aen2ZD9mgteQA%2F%2F5w2npYtFtNxcnsvAAad45G7oBr5YS3ERgvnRKWCspLfah69aZvFJlaVvEV1PVV0yCD8LhasMzVt0Ch5jGa53hPUP9ZH4Uczdje%2FdQNQon0MUwJZfHm%2FBP5V2mobfZqggCZZJTlXHVSwOIBlFn7V3e6vERJOkq926ysFiPgVZGnyN0NDTAtWyzJe3mKGahoP47K1PQML2j%2B8QGOqUBRXGDJmgMvKpGz2ujzAfFEaxSMMX0cIEfUvfwso%2FHE90brWR3srHctHlrQT7TEGpf%2BS4scHCqNvQW46poUy9vSioHTRXdPwnxtFTyWPyxL7FvTNSeiTd7HMWztZ9mx6Y9%2FpvclK1XqOVrOeBlFnMAQHUm10035T5DB6Mx5ZMYb9AWQGoWzKrueqcAHorxZ4s0sk3d3FRkrKX9qf9rUMrTythZXOKY&X-Amz-Signature=376de3052eeb6d4a87f234f8922733537c3cbed2611b0f647e56462c639c74d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
