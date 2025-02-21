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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST6CNXJ4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLyOeKe%2FpF7UqpxiW5J19xFGJE5m8FaURNthXUwp2JvQIgSa2XFbYJzc4uIbgMzCF2E6bxbetYCDCSEW69tZ2vtL0qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBOlOIBTkN7yeGe9CrcA1MWMRp2rT40L7aUVVNx8Zh%2BiBgYHCdGWpKvmOA27eua7%2BGw5snb6D1HPzl5lnukks1ZBjcTxJa4hvojpZHevFo5RPcQJMCTToETvRNzjyFvRxbC7ORtvpUM5Sg1r2XRg0yiAzcS3tJmsmuR6oQacnF5gO8unhY4qQNKNVvBZ5RuRbIUdGsVKlFDrtgPyp0Nsx1dqj2iEhP3A9zcHMA4ou5dcYHRGje8xsKWOOhSGMtawM2pvYUVz8cs424pCZeBQDXPMET0%2BOS92cLOycXH0PWYOvEkVBNRIcGahHKxhyQI6xbJU6YjMxBKiMcKsJPvO0GZbNV%2BuKiW%2BW1mVED7a6IoppSDszPw0OTPFsSN1hgD6UGfFA%2B%2FvGDvRz9MhAFaUcyOJHjNkg0jgwn4f7N1T%2Fbay7row8n0IoXF8d5Y%2FjGPTySW8ZK6Q%2FZaCMPKyDUTYh8P3RrqJsE1%2F9v9B3AnShIVbhsW9FUeqH25J5TuE1x0ObcHmSQaqvSt7vnZNUExzeiWS9ZpPOYTL5d%2FUwQ3l7RSGDSMJYr8CYUWkOcpnkZlng4fiPHTk7p1QYO3dFlXhyCjOrSY4ciM4deksCKtQS6Raxq%2FDugxdQAyd7q76NTmbCNWHN%2FH6W1QG9BPMLro470GOqUBpiubh8VqVtIikyoBM%2BlNcNc9dXpu7JIb56uvTVMvxOkINrstYsGr9B5T%2BhheEf0gjlIOxSR7V3mUsh7NNJrAugVm6gz39VgKK1UC0cYtxE687GNNGB3aRxHPWNInG%2F6xkTnrniG8XKE204FoWyE3VCYzwX1NWAl%2F9FDaadrCsHrVu%2BicLNLhes%2BrXyZkjzrKYYfEozlJosQbUeT3avPnRUZ1D2OI&X-Amz-Signature=81214d9df98e49683300cee9281d937503ac993d53c1cbfeea10b2134bcc8512&X-Amz-SignedHeaders=host&x-id=GetObject)

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
