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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IN4W6SR%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDPeGjVIiHLy3WSOOVAKTBgH7k3DkFol7X7SKJjULlZFQIgeu8FNg8fF95D3GwjOL9mS7Mp24nJgeBUPmWoUUo9pm0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCyyUftRUW5TT7n0hircAzaGwRnsGQ0xiDNKDzBHTnCy8hSVvdcFQ7K4ZpRLdxcmBX5wYJ5wJOZx7e5%2BTFSA0R7aNhRHeoRBvO50g8Hzmu5W4mvwEMzMOsnHJaWM3MRoLK3lgGXQpL9VMNxqYGNtkiasafa3b%2BZi3Dn0oAQkHb5zRB71I1MrHhprcr%2B9v%2B5sms1C7qJ3UxmQ5EqJxVjIMcioruO5ksBq%2F0zJC%2Bxm4jwKhVhz9AQcBrEVajfveeeRJtoPPIwqNYF0RLemLGzJ%2B%2FS3y9TPekD9%2FK9Mw%2FfLNVztHnMyg5bVXK0f4Rg4nyK73rtPpeOHgLorq1KB%2BPvneMENnGCWfMSovwr6FslQz8lb0liC4hElNz79gGjNgAMIVG%2BS5W7NRZK9lzplJDjkdVUhYcno%2BcgPrc7qWmc85%2BpPuPQ6V1yIYkhLF3VjG8FGnEzBhJYNJ0ATtdajZOXZ3kqNfOvXB%2BgWNWqxbeh8qF%2BwlfiVmkL1J2RVbmRz5szJkiXfVpPYcHBlzf18MAgDA4xA5egurX6aWi1aELX7Ex6BkeC0hgHGr1qNRqVyJuqHSTX%2BNKva9NL28pl3jPMH4OXE4GZZiYSS1WC7IQtE1NFNvAs62Rs%2Fzpc8IE8kwJc1TJYQe%2FT%2FzY%2B06O9IMMuI%2FL0GOqUBSIynlcounW304HhZPlxM%2BKXRidQvFHzdBhNVMiiFCgT5vX82yxtWr3H4L%2FwqJgrIySdpLHydQE3QZ5gsqPUlnO8yagYiDSshD8hwefNcZOXv6afmV1yJaZ92gbGMaHV6QMYVwR3qlM%2Fv4Kpxe%2FhFzGEuQLrCsikZ5bAsPAfAR58RRTbuloCTV8Vf1iEJ8VBp0zU4JvNLVsz3GHqSVzAaWh83k0Ia&X-Amz-Signature=1d0f32ec361475d5bcd58bac48354106400ef18dadf038adf6300f89706e66a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
