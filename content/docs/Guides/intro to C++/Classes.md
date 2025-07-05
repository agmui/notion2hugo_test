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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPIJ4DUA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAqhtSyooAloJQt5w0iGJ2eURsK7DC8YSqW9uTBgLUKJAiEAgJF1cPO8iS4xL%2B%2Ffal1Jv7qGNw4CcJRGCC7phDLzblgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDlXGdV7OPnAQ3bjVircA1TndPHdkMAorRY%2B4UhXtY%2FGtrM%2BtaNQLMktardDQO9JIkDHLXQzilXBkq2olyDvd6YtRi%2FpITkavOeJ5lZDSM69okQSpLIvxtEwVA3NigIgkxv6AgglgqGaG40TxxsIBKz116H3xsDsCaIhj37%2Fw1PBOlg18frF6g9z%2Bd8ZkKfgJWQIbxG%2FGA3E7USdJL0yPA2lObQQC%2FN9lsofNljpwdLEmblaNYoBW1c%2BI%2B9pViEGYL6i5682r9xJyu1%2BjRHAAdIzqIq6tRxXZaLwjVDxYdWu1v%2FOdfa5SEjZqC85OwoaHRL6KsEtkk35TYwZvfnszfdL6azI2iJlrXYOG46hbKhii%2FnwzCZ2yIUQfU6xBg%2B146%2BdXoqgkmyc0S8sJdsM283durXuWBKtjs6t8drORj63AuqPcVPEpFiFjffNR6zwWvVWHeiW7Ju3aBv%2BTXPZtmRUIDnoOclYGnBpuwcLlgGSYBetdxaUSGsVtjEKQeFaL9R5I3HsTWVRuEsIkl%2F5KZ2N7dGddS2bLweCjRp7iLMPGYZaUVeL8q6zHpp2sSEEeh%2Boc5ByQI%2BRgjtFm9ysLqK7%2BvWxDxMCuF6xv5n7CkNZtMQDzQIDthd06zqeQuue%2B9%2FqozcSBOyl5egjMKago8MGOqUB2IWNxcpR2rXH727pM4g4ki%2FBgfTqE2Uz%2B7oTlG6x9d9zk0eNXRzWcaBrbSLfCFhimvpI5MDnFeuWMDblM2cKKVi6qebdz%2BCsoRPQFTUulLVXthz4ofH84%2BLdW4ETjNQGquQlQ%2FnGc4S5wJ8pfsGnL6Y6Vg9tHwVFlSMj8tn7ylkstr2kIxoy0N633KEXEkGraQUnF7LmV2JO5%2FI694weHLBu7916&X-Amz-Signature=a234e0db6649ca732b07dd0850427068a1daa862486d9a119e23d148c17234a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
