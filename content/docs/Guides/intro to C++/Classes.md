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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRKZKVM6%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICVoFtLQ6niwb6osnf0QSnFPaH5jLHSdYHX3%2BPWOAtXGAiEAuDeclEP6aNDqcF1j4b%2BkklpzGxYRuA23zwpVzeNEiRoqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJWPRhk%2BVJPtEzQgCrcA4wPjut6QxkM6SFOi4TdotHVCSZZGSR%2FMoAn%2FdCDxqGuVyVsybmoPDNk8JopEElPyKYpuF1dc82iZ%2FzUpCdxhGW5xFtukpWKbtmJZj%2FnNHku59iYLcxrGfXUanP6YOfdoY%2BSzvfMQBAgjdLo88Gfx0BMOdr3ID7xsgg53qe6Hzq3dKVQlNOChjBqdB9P5%2BTQPQHWIyFA2uvL5zcLKtRV2IlI0MDFBtCSh1NwDLRCCxsbfs%2FBLf58TNJZqKamKq5CM4tG4D5RWFnnIJ4EMtHibqI5n2s8KK26TtP%2BoXWmKmCPbWoM%2FXtTuhivs8XDp5%2F2R2%2BTUseqTrVhvb2mPCXKL2TzdDsZdkoKL62C%2FO6xRsBoKM8yJMkGS0MUj8DgesbWWe4xQ82QhLcSOxzl9krOxEpfGTUborfjqrGniCCVwFbmgdV6QRDFI7FIHY5jZn1atKPUw8x388HHKD4JgGzcI6cW6elqc21ZAK%2FIKaDSNmP8FyfALxDGzYOBFSvBXNwhdJpoFW0DrR1PisRy6Lmasyxj3lskkiTg5fiSHrw20t5NN%2BWa5xkyrskgiJ88wc0BGajUKWJvUTkGqOygySqN2FJVA02Q0rJGF5Ee8LgnwLUbrGS9v9SmO6TZ3VbrMPvil8IGOqUBTIhgbk%2BXm307XgNIhImGuPO4Wnxz3W59KfqrzU%2FnKznqDmjOGEat4fn3yJWGFLpIbq8Bg4yj1rF0qhqeLGRknnHx2ZnEKuYBhJa0aIPcfShDub2cgVuDZ3uEwcQjCFgC0cnbVs%2BWNKt7JPAbXuStSwpzWCkBl%2B8BcwA56kI3qC785TS2UAMZL5h0lrnUu2a2w3T6DsZIXB2%2FXBNN%2FW18zZPyYMN2&X-Amz-Signature=81ba31a81b7ebb5407b6adcd64cd028393e3bc705dde66f3a89fd7c5d99bb7ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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
