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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL5LTSEI%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICykMLVVmDXmpg0OWtZPyAfuVWB86RW00tpMVXHIAlZPAiEAvFCw1EZ5zZvpYkNU8ksBkB%2FSzmXumbyxz0iTFGODwF8qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJV6K%2BFhXxjdA6SvIyrcAx65OZu0%2FCEA7gz%2FEUVuzJHXg0SLzKaYyJfo0Yg1QLNFMPwboS7MI%2FpRGDfmEsTrvZamNx%2BePncae%2FXNgSrRslSxzWwMDlli77JYoYxlS%2BybNRzZrIuahgsKXrvxaWNujPoTb41ySFpUWY9DDasTFtUpK66PoA0Un9spoc%2FwJmqrLLSuxm3DiqxGK6W2ctGOKzpaxdV4In9rI1CsBJdT%2B79pOa5oT1oHS48uVwRiVUaU8Q8PZEB9WjR6jqTfXa%2FMybx4IsUuss6nl0CGUXt%2Bm1PaKZNNlHB7VHn6bZj2DxBDWlIt62zE9ZETOEyJJubQvma932ZzZEWnUHPYnBbn0aFpC68V5a4Zggt6co8vikVCI9rdSWKeRcd5B5w%2F%2BvFej5KQlyhb1gDNxyig59BWbOhaNOkzgvS%2FYh9xzrdGgehixVyxHmVuL15j5dzTLWzd64z8PnANRNp6Ydjidf2vqwe4MbrZEHIv29zS1uo3XLK2I3PP4himeBslF4O644Wd9uRtVjjdR9a2sgNSWxJkJvsUtt6SIeJ0Vpospy3Hx0NMSYrmbXFGkUADD3zcOnXBBNI3Zba5vScQeN7OUjTNcT8FgML8GQdqzYBhLu5FnM4%2FzNHmLIBghZFJRId%2FMNiitMEGOqUB8%2BoFrKUFOTRdLcK5LPCOaniZNlHWyPrVLKPL2fwwK%2B6JRe0TpGnpBvN8v0DKFUo2EHq%2Fm1Nq5OAZDVjZrH9fIqGMPEEWAkWp54OIUs%2BAMttnhx6AurxqL%2BVWY63O66TtKMxH3Gl7Q8uXM0b77ml5D%2FfHK%2F6kiuxnhUFHK%2Bu6dv2%2BwtHD30ykk3c9cZKxVhz7a5GpEBxcJ6rz6aMEx9qBc6I0NDlu&X-Amz-Signature=ddd5018670531fc25bd21df30fd1ad1c611e8de4541f92cedaf58dec1cf18702&X-Amz-SignedHeaders=host&x-id=GetObject)

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
