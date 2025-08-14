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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YTMD53X%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDiolHZAybV1SCVmxcEG9vUcRmtyw6vuxM8n%2FIwq0VYEAIgINQTBtUB4V%2BZyL%2BJr8t5HaVJzFLsr1TkXVAaD8Az%2F74q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDOKwzLskLsql77FHySrcA1okUqos3wDKsAN2W941DxePhhGSv6mdLOKMi59dKrHzkLcPaX3U82TmfFtVwCXuW7IkN%2FNBkfnUzpNy21gUMK988Aq5%2FGGoYu9ERLjdbkCvYqt1g7CDTxuttFbcWtfTL3UWTy2HNcMHf1D3T8zVNQflvpUZA8WWseJVCvsU7jD40OQM9BR39CsEyV6YM1HOaJ5mTP3AxV4iByFoAvEkgkZhALPu5bX94phO5v78X73Q4uPHxT0eljKDD%2FyRfqRmkKAmwV%2BxIwyz7DYBP85qrsztDSs6FrhNfZqBTMQqAkLh%2F7G1zt0lOKN%2BHvM96JxQP9MLg9Hz0iZwt9d5jmTmZeea08QmdYIHjn%2B2GWWMFWcUu3IArecLHku5TfMme8txKT%2BOaOOjcskf8f9lcF%2FwRkYBXPBMev8T%2FPvnjUEu4apEkli0lVe3SxEOoPbb5CpLMLLcm32Dpv%2B0WKuG9Yn3%2BnNEVV2vZdBW5aAApDwKAkwN%2FxUsKfb5YjS1BjTixUSgkhyQLw1nO43C5%2Bpu2Ny3%2BCrJKz5FUz8SYaLRnyziEftESjaqBzv%2BZ0cVW7GFV1Q6F82QzKVuyVjQF834hljxfp1P2yvvV3%2BzTihgWm6P6I%2FhIhDYoWlezlG7HaOAMOKy%2BcQGOqUB2N68xc%2FzCcu97Pj43bixv43Z89izTRyAYcVvL1DjrJJAfw%2FqU0WHpYcdDvZWYScJP7VpPJJghJ4YLIJYf%2BMkkXPEle3AMrG2KF%2FtXe0RhVVtH5gcw5Ter725S8szZAsMw2i5OtABbldxw8VAwH9UZJtoiakAMgSNL03YRhxnF1NbWH5XvpryTtNYkUq1wxPBPWvkmf9yAnpzUynRlERVhPMwNWC4&X-Amz-Signature=5efe1d120529e361dafe17b94d9bee99136fac7ce5129f156e5e950eb0442189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
