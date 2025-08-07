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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYTMWXFJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBaYVK4M8mTrPH4PDwKQ7lsK6tfGQiPyGvBAAZkLNyIBAiEA05NOs%2F2yA%2F5sMhiQ0jHPPf2CIveg%2FzfuYZ4OTVsEGFQqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9Ko8fL0p5%2BcsFQOircA7e%2BOKUHKIsO8CJ8TO4STN6Qj2LxlHyEoZ1WQxr5scYalzwgO2C6VXcu6uYSOHx08qrou3E7L41ht5NCO6CXzl4yH967WwIDYuu1W%2BJ7JB2xW9SGwq4nBA7klrUyQVxDrdIRxygJB6Sp0ZAu1xi2OhBe9VlwV1Ixr00Ol%2BRJgZG2qJHZIl29TEAYLU%2F988aZcj7KGcmN9f31d%2Flqn8eFFgUj8zcakj9l0zMYYc4ELTTYQ3cuUh3lHSovYfPUSQ2u3698fOMPfJsW9vT3LcJG35nxxkPlsD6R1SWJ5KyHJDOOC9AmgVV7VNRbScQIJtj4IJoUtSC8wr0qV2L1ax9mh7LZB94eLGll39dO0cXqOGjo%2B3cO6BJdS3TzpFit3hSGUdGml1td0B6b1Z6ZU2qkR9OdTcnSbXuPODQVbXdIexROzE5pykQhfJgjxS9dIVAguNCKMO%2BpOKQz5b0p1Odu%2F8r%2FDYTVJ6cfsLiQ2Z7Mb48EpC%2BQRLSwNSQjCOCnEg4vzhw9VK%2FYTBt8cq6jO8AHD2eZkxVcBSxABlky7be3d%2B8cGc3k%2FacwRc44WFtYODMpSf4z0XE6pwQhxadYKEwxXqrbY1KXvAb9YRixTeeoOzItKiOmoiUYwmSh4m%2BnMJOQ0cQGOqUBK%2Fp74pRWOemMnafGhkY512omcTTRhlyKGwddaxMklFIUZmAW8gF%2FMldhZoDxD5HHG%2FUbdekqCBRSF1C7Gt4J2Qybzv9HRqK4OXAr7TVKtjgJ0YSojMTtWPTzqdhoXTzAwoXCCzZJdhc3nlds2aFVrXxyrCBPFIBCGQEtjEFDSvx37ymNXuCv4VKGZrf9H1ceg68PlFLgaHJ8IuK2BK0wzyFJ8TVp&X-Amz-Signature=e39c204de471a1d342de6eb0c5748c2da1d80b3b4e601f0d9183a16f9e50b3d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
