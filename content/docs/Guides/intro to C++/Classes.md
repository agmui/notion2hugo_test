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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642TYW4PD%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR5dJcDf%2BWtLea44%2Bvy8HkNZ4p17skDkFr2pn7HyeRwgIgTjcpzjx1BcMF8wUGrPdx7gQ1EuaDKdw1pwGIjf5O1l8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLmZ0Y6GAnSbphAxySrcA2ZodZ5PXsGkLfsJ5Xjl8OLEwNtbB%2BbkAyuAGj5N3g6WU856p0uYJF%2Bfxki%2FxebAMB65YixH9ZUC5o%2F127IQYiKvM7tmYyDlZ72UpZEl093kT5QiY2COn%2FHprfSAGQo97zOFuYD2Mjl6N2xwl5RFEOmOmK70%2B73xjT9LEpXeglRPJ6FS4ug99mRv561hAxWajLfHMZJazi3u7tvweje9IO77n8l6n2VKk4RaEPuhSn5stfozN456DI0JZ6Lq%2BTZYSgMUl2YEC%2FBFGokaA8shLMbhHK5NsmB1%2FsjOJdE30jj0bf%2FjTIldMksrpg1GGIQwZ3%2Fcam0obvzV6KGooO81iRo2xB432h74u5fkv1tafo0XQKzhAUFj2nuBW6MATIQHz8Q%2FAZdVJ75KCTxpO7Tsd80RQOge93vaDoJkzkfLix4zJacGwZkyZiVqwJo614tgka7iqlhrgVSgc%2Bt7eFhxz9moPmL33zvw0e1cfxkw%2B%2BIylrJHhM3Q%2FjfIjX%2FlCkg9YGCdXFi0ZIOeS0LeabD6nwwtwU9Hd0pFYBGaLJc3FNx6KwHJ6i0dFF3wtEgcsEN43S5E3xzUZdfWLz6F6MHATtoWVYryx3bHC5CgwKQLG10u%2BLjxo2GS3zzksFY2MJaWob4GOqUBR4bPYiOQM2UN7lbHdyVStnyjMcbNlFVLJ%2BttLRBgo1m7HprFPIRjzfaBIgxoCzyfSIhhEArhN2zcOc6267Fle5yPaICforvrHo6cKoK7GJ%2FA2MUzKsGh9vUvhqBbVfiMyey0XTGbxmVGunExsQ8kUXYcGCGkkFq3VIXLvAxxxzXjnEbohb7Nvoop9opVWwS1%2BB5Z2PSQBKQAk8MHHxckeCAMX6SH&X-Amz-Signature=58d9d5e98f0533b841b6f4aa9ed452c536a76775d5f0a3f67506f28611bcfb19&X-Amz-SignedHeaders=host&x-id=GetObject)

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
