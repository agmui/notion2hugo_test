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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIX2SPRL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDxJsTgPMNV%2B%2BpIsx%2FlQoBbJQYE9Olp53TPNU1bq7ULUAIhAOxJjaKWFTNSIAcDz8lF7PLAZcuqdm26lfUeICjelwjyKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoCvzFfKs6E9TkRfQq3AOKodK5sYlZQFBPvg6WG3D8DeoqhIdBgIVKnXSiAVsjt%2FgBR40GiTAwf846Nt1W8qF7mwV0t8GAXzehzs2lwpheCm0SZfmrcPPhJEOfskaBOiiZt4mKJDtHGpTIrNLpfCscoA%2BrR2H3yDaztHEkxrD6xEtNKdOwusz2eH7nXTqzxgFNcPkh9d1MvLSN%2BFU6CFPNEloIzoZvZYkt4qcWVgXsxLtFR0Z6iPsk7GCX07qt88afLJglRmJJR9eEAqLBl6klVheAQQcUQqCW6ldaTjytk8n5GuCS5HDu%2B5X6QAwwujJz3yAgtRvF9kT2X%2FyLaFVhI8IkvJyf6CMC2ATG1%2BPNolmakzZ4hPB92WXe4hIAPeqM9yoDjERt4ifWqujKFcMvKU6xCrR2nc7qfZJs9S67lABa%2B7jgNXhvB8piIrQ0W7MPYWfzdtUt4%2FrVhnrwDd3GFsabDXzhPN2g4DlgAoa%2BkP4lE%2FiLDrrhqWjh3dskV%2BIdlIOSHWvbpi0GupVGzZViDOnuSy6UjizGg04xDj4leCwr2aTblv8TpLU24RUH3QdaxQ1pQafyR6Zy6YptyqCEGjLIKP%2BnlnvDdwyRJ1qJXtcg5pnJUPHPBk56Mb8gsPgxlm8Wf23FTXSriDDApK2%2FBjqkAQAt68GRjkes9bBQnWmtK8a12m%2FLjqL%2F%2FWWibiELro%2FkMrb56BGY89Rk2HxpXNUkFGzgBTQFwgi3s9sOtmNWWBkpm%2FrI4O9Q9C6CdscLJM0GL5uPUCQzNU8FnZHS1KYTxHzkZApgWojGiMRNBtjGv9IYgOnimjoPdS7rmI%2Bsw4SAgpkLyqYD6W05%2FWpUE8SB3w6p8DsukPrqD68fOyTNLnv%2BnOsT&X-Amz-Signature=98549a19a8837763f80f207701dac9e449df451c2964ad4029a3a1a248374cdf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
