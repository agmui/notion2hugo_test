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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VNDMGW%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj5b7MwdkkH%2F9oizinVVORiv5FgMoP6eAkyc4v0NJ9igIhAPJ57TUfF92Lc8muH823Ccj%2BAjrbUd02IWUtGxL29opeKv8DCGUQABoMNjM3NDIzMTgzODA1IgwMcPmmQ6Kjyr1%2BFKsq3AOvm0BlwLRsd4xXeZKsxfWvLo1xg8eubq306046NvwtD5%2Bllb59rdIszvnnoZjqDTaV5Pn8%2BXUwJRN9FYOGXg7hNunHFaHFp33F1j2oHCKfT1Kyc7vXEhIAPdmco9p8mmBNIOXwgb0dW%2Fb%2FUEfW9igEEsCIb8tMZuCFbIdl%2FFkMSCIp0RTLZH4mCOH3dC%2FlOfhJg8cbClOs4FIoE31nnAt3%2FPo479LL5CWWmUFjQmI1MM127aqR1WSJbMf1S76ICSZLcUzbEylJL1RPFKzpc%2Bv0cHhDLTF%2BZtmRH1D9nFl9hZs3B1BpjistyWmxq1mP44Jr2RHLvKCiR7bd8MDUI2K14pO%2Fc6q1utJ6sLektjU76F6N3lYwaPS3%2FwptqhRGDXM290JBPH%2Fxn%2FcY646R9TbRvpB0J1m%2FNBd6kCEStbikuzyBmUR2jW0htQIWDbmPW1cliOE2rfGWx8nzdbRnMsX1DhGhuUDXILWGQtZZJYY3m%2FjWuJW%2FZvaBRSez4%2F26w1%2BKmxBBFkCiB2T5GgkYxYIZcHHq3cWs6TScbEU37eIC6cZ1W7Pm1MyzPNdFAfTELYW%2FGh3Jn1Fn2ckC%2FNsuzN8aQRV6CbabEWJrvF2WN7yjrA3uPaUHiGImfVLOXjDfkY3CBjqkAYk1mIXAb0x2RKljRXAIJWjbAHhKiCK6iRcakbjtBdEmqPX6QwA9RAh%2FNTXtvarCNsYtwJ8P99u4lxL5dCmRVcztQckv9zHOtCAN45zY6yZP%2BBorkng5qmvzKl5M6VkIsY%2BsVivFRmAxI3djOWseedwAJeahTzbwsQQkvs03vkdDgkPX9SggvSzs9PLi47j4RzKYvW%2BKeZQ3uZs25Qc34v9%2FFnvW&X-Amz-Signature=be2d472b92009c6ecdd3819c27357fa495713d52d551b460eb4d309977600e44&X-Amz-SignedHeaders=host&x-id=GetObject)

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
