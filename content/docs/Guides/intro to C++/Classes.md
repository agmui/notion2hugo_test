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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHWQHQY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMorfTMGCMHXmmP2dbFEKcuaw%2BC6sHE%2Bl7WExLpxw71wIgZ%2FWU6Kt44Y1sGauOP5xeXokkxOiaSoJLsaDjJPzxGWoqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2BppNZb1T%2BoM%2BYJcyrcAzvntNLY75EqGUZu1NI08b8yJc2xymlCyRvdF5aKDldpos97X4dRjDW1MHLV%2FPH92djPKSSUusmyeGc5nLSdrRRZgnd3icH6NKr8%2FJfgQxHM09SdfsCqzSNHDCyt8EyHmsxCPyOVeeRH9vrM9bq3SU4PF5nrp9%2B4XvQldHQq5zVRI6hBLqtFAzidUkQlfLjPoT2xdgiC5BRD94V7IvIpJIvhTDXBpHMtOocqVtGKkkmECr6hhnI6x3eBSyAezlV5m5jJG1gsjEn6bgPvw4VwXf%2Blr1%2BDKtStCGdnhcvS3VhiuN1%2FFFpJWBUFT0gtAnDEqO%2Bv1nBjAUKX08NlIfiUm10cSlFEpT3mkI6g1Z5AViavrYsaAMi%2FIdhMnspT7gg7SoUJDuxq4HMlXcQaMeBqHrVkyiOPSzScBfFmoFnMvk0YK2Tc%2Fe%2B8FOnjA2gIvUkFvtKM%2FGTb0orYWHA52UPTBQQgfNKul4NKrZMBn%2Br5eMTtcL2%2FcjiTPrjE4u6hvd8yhiFOKtSp%2B03LTLaLR%2FKAF5PgeBtyfU%2F02XikNzePnS%2B1asATmiIFHvvcTCfdt3tCcUheCZDpc%2BCYmCdb%2BGMttXKN90XvigYBbm3rH48zz%2BoH9ExnKnGLUCcZbeXZMNq3%2FcAGOqUB0Ozs4ETed5LLaMpjfK5lmjsFee2PEsSExs5Htzmw7PftnmjgJbqpj54n%2BhC9FPwC7jsaNtcojKbeb8xKpGIKIM%2FxVnKFANKgajMsxL3gi6fxhqQMPqetYS9%2FWW6CSZ%2Bpjmzv0KQsDsgCcTU8azoYnWW8SYFORYiZrLpSdM9E%2FYz9H3kLd8FfpiPCkBhuyA%2ByPlc%2BJ9dYS2s2JfOQf1veNvHcvmUl&X-Amz-Signature=78c56b381cd774fcf70945d21ba8ca687204580a3c4222904e1af5e98f4bfc99&X-Amz-SignedHeaders=host&x-id=GetObject)

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
