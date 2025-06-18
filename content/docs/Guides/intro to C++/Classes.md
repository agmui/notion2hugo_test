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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A44CEXI%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BaVD48D5E4pxu73dS4EJYUFodOpHYgABeG94t79o3ugIgU7H%2F37lQ3hPcciMd9Y%2FfcylkrpwKQ6uwAQqSO6kVppoqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhUi79WjXPRNoDHnyrcAyCeg6pZaGE2Qv7OIJguiNocyy2sMtJWz7RCF1ilYrSmlO6qYeoHy2U6bzEtCE%2BcJPZblJq%2BLRn0GokN3Jqh%2BgwDCE6YWJ5TWW%2BMwSv2xFHTtb49ceyYlt5dKGXWdkOH2wkDCQUVIe%2B83u5RtcIMl1nDKzhdDKej9n3lYtMTio3hYDlXm01uoFEwpt%2BmldmBzetob9wJhO8GewyjbNX1S%2B5smqv737VCvhRz5c4VJ8wSNYXAuB7cQI60As5%2FTaXLVkxGnYXBFFEKXTAE7IEIKIzFt4JqP1tr3YTJYTipeV486WUQIESPOaQS9%2FBbAJrlCpSi4yBhnv9Glai7RW7hpBOb%2Ftep%2Bl3avXRD88YbD%2FAH5z%2BwfKodoZUsx8LX7qxLMPkY1%2BgkeWcDPuJs3UHbge0aHhh8%2BuQ6mjMtmH8mZAnVfEQ2WqHFeTbz%2FJ%2BgjZgi9jVYxcEddfdjJuraCTlOlGWshACYMm49dxF220OKP7kRefv0QbFHs0DesvUIIZgInKo%2BciG1UIy9xknr%2BBu3Zv6lWbB5DDe4nGRhkJHblKJq8hYmhvra6oE7zg5ytsmNDeCLfFguA14Kfu5iaBIHicGoMfC0IjuviB0BJFJCIvG6qu9eTijzN530Ht6zMLmjycIGOqUB%2FxYAqp7SfdtiigrO%2BS6DYl%2FDg3UFvv2mLalvCO6Fzr0N6fzO0Hb1VbErMVck1AvnZGPjnTEQ1I8gUpBhsTYJJLBhozzIbwu4HbyeDrAcFtpYTYodZF0n0m4pQcDIfWi4qodvqPj6gZjAC1IWUcGAH4R5L%2F8g0hJUkJ%2By%2ByEWbxLGyfElg%2F341Y0WxukMBDFLsA6ZINHpo2mCYqAtvpeW%2FJaecKOw&X-Amz-Signature=6b322d740d571241c355dcebd6ea98132bc271a323417670f630d7f8d2d640b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
