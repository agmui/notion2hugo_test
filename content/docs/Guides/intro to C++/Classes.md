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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RBSZTH%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBceciDmwPM%2FgVC9ZqALGRh4slBvnT8OFmci2RgDkh3AAiBNiPl2sNMUrtayCczUPtvrz1oR4GxMRfrFSd1XYfV4Ryr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMTW8urQDG73JF67AiKtwD%2FP92hdCoIvASOiA3M5LHpc14ZI4rzGiA6lxIVIELvLWhAYtE36IXA2AjqGQhTu72%2FfAkAXlDxATgX4my5LSTb2jE48ts8FZ%2BDHlnFD0FMHiqX2g%2F7ydVU6%2B2jMmHsjwuVXNJs1XljNXNCqeLP0WSnHBW2XLhTZJOGZUNzyi1yXVf31AaHZaujoXN8rC2TbXM0UekFqmvmkzkV%2Fedc8fYJRvTmJwZRvXNsHRZ3zm%2B1wu4rpUhpgmqmVEniV%2Bi0SKl3n%2Be1QTCcMFrJ%2FByscubeMX%2B380uQewQ6hf45yKa%2B3Lhw4AYa9AO8rUt7v2tcXMejlav2QH1NPsarCcH6iTxN8Q%2B%2BSizffDMzCSgHfSiNfjPBR36ySqyyGj9d0FLH9IPHShT6FQYj4ayP0b6uIl5HenVZI2SbCnUtELCYWYgs8nqPPpnDzYnGfrqTm0Kh2DRDD65tBwH6d%2B95S025ZRnPEycotMh02%2FYWBNtBbeMxEqPOCR3U9%2F0f%2Fvas%2FA%2FekHMT7OecvCKQ%2Fk%2Bs6xpsZn%2Fb9PJ%2FQKMav%2FwkVhgPV6Af0fF3dqpf3vTqt84Z%2B12FNDNF3wUjrIZCdBxYppx%2BGiw4kskUjBg71WlbKo1hFmihTw2z7yJyO5OIt6acYAwsouqzwY6pgFwAzJaVkPZv8yYqb%2FbFwYvqzUTdknv5WzlJ2ScNvVpS3jrF8xmg%2BCd40ecAK4IbzQaGrPRZw7NmpOYDSkcUc9foh9kE4VmK7sqbHKXY1Ckoq3EDlxqAsLgr9WZeOwIg2tpVM7H2w8AqB%2B1BxBx%2FX06MrnA1YK7dTLQLzoEdoZuPTR0Z%2FSh0wqMz1U1B2dM6646IUBN396J8uTT5VCkXqhAkZCa67mn&X-Amz-Signature=916444f94cf8568a553edb0010aec33ffdbf18d81ae08e637e091e5c9897fe2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
