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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YHY6XPQ%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2hzqD%2F3mKKO%2B%2FBzT4ghLMe%2BGJbkwmBgqZPpmsSnGwDAiEAzXP7MGs4aTmfAHDprc2Ty65mW1Nrj9r0UKYFWu07IxYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxejwBq0PFb8FDhcyrcAyT7o5HIF29iGZ1EdF5hQtpogcSERPaPvHjBb8ZqsUZx5lydH166nIXW34iWyCC9KxHwl7F14vCvKKRjxf5eFK3Q9dVrnl2kVEAvuRX%2FSBc6kPsDQGQ0X%2BV%2BcaJC4s1JWbPjLGJhQh1aUg%2FC9FZ1Sv8zYli0Mzx4IzD5DnwXBClVrR7KCDtzWTFV8dszPz3mEISWKq2RKDH37XK9WzzXHHQSeoliaodZZ3OXXriOsTyy%2B%2FgAp20dRRMhx1MfybhPsBml51K24h8uxI0Pseabwx5zJD%2FfePStPUf1S3Z4j1I%2Bg61rX%2BsDiQYgGjpLN8rAuRM1nP5c2ZhoDBeWq8sjGhsfAGI7KuB2Yc3uLa7w1qePh6qxUOhNNxvcC9LZxY1DMm8krLlzZ9tSnSP9f6m0yrQois4BNGVDnjP2IQFTCeqmJiVunQ9FBmMQ%2BIEy%2FFW0uryXQ%2F5vb9EY24Rqge6EHNyjiath0laOS%2BLXkaRBeVj05fKXMuTY9d4op4YxFazQQlNFsUx3M2utCDMiVE5X4K6hWTxCVAGxDew4lHp8%2Fmzq5n1LinN0wITEir3%2B8czrF%2BwO%2FaJwd2y6CM7vw0577RK%2F1%2BLtzsRDsy15ylX%2ByI55Dt3yT1DmzXHqucYZMNqWjMcGOqUBxP68IDaz4HPU28iAFxg%2FG6i%2FbljCsGqrmg1roG44cKmkldXSk69syrd1khDCdJ4McTbsH%2F8c14SOtfCtcilg%2FCUmGbT8YfxVT5nrZ5mZ1kAdC%2FwU2FSuUJJwaSBDJ%2B1x589Md%2B5MTI4ybtwgeiILdLG4f1AmmRrbu%2BrXK5UdKZpIzuHblVay0%2FsZRsyJlb%2BIUdHL4MdFQ%2BtSclrQVTBRTti27Zsj&X-Amz-Signature=cb0d8d940b3014179727c4bfe1646b9d6f4d75ffd205f57d3db5dd7c88fa46e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
