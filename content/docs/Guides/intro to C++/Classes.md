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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SRQEOKH%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIE9Fkpp%2F5G%2FJHRpcBXV8i3Fzed9HiGKpKn%2B5rNy9cu25AiEA8Y85YqhA%2BuWAJb9g6ecqbw8%2FfJarGa%2B7L6kci0%2BXtAEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuDsCf42hBpAxL8iSrcA1dFKtVz3L1jpm%2FzFosOPbQTCyxADpEXXxS9BN15nf4uRcvXcqUCmtHlPFOZODgSCRpYw0nNJrqgctq5taPOeuquW5TZ8LYkWvtiO%2Bw12bosawrHB%2FHFvEZVIrUIDYWRE762ZGsoOwUJ%2FBFBKaFSAgzVzMvSWFyFlASAUk9le7C5kLQLG4TUqfXVkjSd0QO%2F6TTMc3iJHjI1srYIE9uaCvcYNKB5mou87Kmd5I0oRjHypm9wpdxfbxEWSGib5ujfwHqgFP1vuRuuBw24QzOEq5iPujLzQIxqnFM5TCLG6HjLWI6S4o7Z%2FMePj%2FdqSgKEavdqmNhJbABHBt%2FQOJpxHBfAdHXolYgShpwty2QYidT%2FxeiHV0cjgEjEnlwhtHqUTLcpLBpGofbzIxWFQRHs3%2B41kteDsGVfbcBLzC7Z1OThXge1jSOnotP7EW7%2FhxO%2BnODx8smcEiWkDM7ZeWWEgi6i2nA0lg2xeLGAw%2Fio5yc0XoataMZdtjC1rG0MwKVRTC1M3DXVp9A74P4126dD5gk%2FIVVHE6YuSyPcchxJWmSGfJlXEl4lKL3WNuSyNMMrAdSF0773J6OydxeKe4k5L78JwH77Pw6sbkMoCdvokpUW2DcQwPDmdk8Y6sEkMPHo580GOqUBKoijsuP%2BbR9OrlQiRGJfNXIX%2BiHiKKtRyKfIrKHkvY%2FsaQ4lo%2BHv7JXZJE7UekixtxO4xGJxvMkskQL4fCsFnFV5xs1TfCptO01bl%2Bg6PehS8%2F8NhTVDug%2BwNSp1v7WWHyjKKpGq7hqO%2BpM6bcRJyRcZ1rX%2FnTR7WtjS98S%2FPmBlpY8f%2Bt0Ii6qbTMACuw2awXPJAhX%2BwItwOtr6qD772Y0cfgef&X-Amz-Signature=bc32b16c32069548cda56112d5c367e710a159052e71a283d911cb4f8fb49db3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
