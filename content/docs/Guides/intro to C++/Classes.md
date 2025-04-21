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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NTQX7HT%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDRX8T7m3dZAq4CbcdrMd%2FxKbIJ6R38eLkgFDxgjRrAwgIhALzZEJbU%2FQSY1iLS%2BIRInE6q%2FyTQDO42bAAWsrzDT31vKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzGd0B2imRnhHOzVkq3APt9Ax%2BQuPps9i1Xtxzun5yLDTr%2BHlBVk4mC7RYXC%2FbYqi1FYeTOKaJZhxKwgpk83fY6J92AlgFbpZ1OkF92R1Ng4cFEKBRbeIjR3sUHczmNjwgcGoOF4f4DWAzSQQiquH%2FVgh5kY0D%2B5XDIE2smMWUF7oLuMaX%2B26gV7%2Fcl5co9PtKsieGtpRyW8JS1f3asef7bkWHO6VNpXg3X%2FkcOcbjYpN1esrqeRaEZSgUAZpxsoHNeDcn%2BrFBTtbpLpXhpQCqXZS5s%2BrY4ud5un79MMaBeJpXPnIKGNX1MyqfV00Z9q5SVhQT4zePpXXUTKzjduAosWYFK1KE6aaurFI3%2FgcDO2zvsoRWhnd3coCqwOOJ%2B5CUaadxI581HaMIuH%2FZs9xNUGFV3Gp6hER1aSsgK8zanX88AaGnApipmHBHVTgxC1tGQ1eRN8Ggv8wLVPA8poDkTOgBlfYdDz4CIljeIUqOkpi2Nt8WLXttmvnOFXBVpDAKHVyhgu%2BUSo%2B%2FlRSFkOsnCI7zQd3LZ6g7zfuYLCjnSzH4GU9WHoDY0phPUgWlGBLkqj%2B3VGGItOH8P7o32S5BR2A6M2BzNxe7uAoVaaQfSDgf1UDuYJ9ApnJbw7YM%2FCdMOS8YOLz%2B9OLQPTCQh5nABjqkAfiHhWVfLfwpb5ivqc00E0LrtAXXaXdlH5eFpjvWgwrV%2FiiLbuOCxMQS7mutk%2BFj0uiFu%2FeKsKqAbEe3RwplINXwzG1M8kB7p%2FpH7%2Fl0PJYio9XSeFhDlvQXo1xs1L7ZxErQ1f5hb3ORTe5pBpow5OCIS6hwhR%2FIcaRQ6fhr6WDgWWL0wSuJyRll1WvZZl5ZgklWKVZboGJy8yw%2FWGb7WQN2ywcq&X-Amz-Signature=f6525adbe1674c2e73ee8bd13033ec961b80d3c8f745eebe44a3896032560287&X-Amz-SignedHeaders=host&x-id=GetObject)

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
