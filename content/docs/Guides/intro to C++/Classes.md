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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFZV4QTN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIAcM%2BMX%2B2fNuEJeNXTNO%2FY76QjmZrNNOKCSPh1KaYh2LAiBqF86XPMFbjCle4tBsMKZnli2VJ%2BaX0fUwjybsoxWVZSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMF80b8GoDm3j1ZJD%2FKtwD8qbe8SnxZShjUdY%2BUNgTcyQwREWBIGKGe8kmGTs1xJFlGydkoAdhyBqeIhAkYa8RIjVRrbmvxftVyzOKItYYnxcKXsjnuwCRdvr4XoZBBHqRG0UDf9sn0oWAeELNdPb1ZR1qrJ78Xd9Ky4qiiqLHzhRuBmJgrUvbr0HNGo%2BbhseKX%2Fr6c30d%2FGDMhBmwYGlav2bF84f4M1IHrK%2BsCQ%2BvfRQy77uYsFTTIGdFDTKUeEu2gPTROULfl%2F2yzH9ir7%2FMkAItmJal6HkNnHqvWou%2FIgMRR3kxDzNZjHXWnfhm54Rv9UXZPavktHV1TWOuAq3AMU9DnWr%2BT3%2FRyutDbOi3deSOGFrH190YvvsI2oQRmBTajadc0JIqNJctJZ2xI8TRzmWgbt5LnQEUGJGGs8HwrAxccx06VPOCSx46bknKx7JLt8WD2xWwwCiR2mQN1sQll5N%2FkM9%2BsY0leqmWrD0TEBjNHYL5Cn6XPHxxuTZFYy6kwvfDa9kgN7PIpSmRXHCfibl5S74vobeFz7H%2BqPV4N%2BVaRlVWGThWMc6c7M7tX7swXhs0NtEPh8I4oT8ZYRWi34AVdCiw3Qp%2B2OsgpOUpvhY5oKtxQ%2BmkDqlZ%2B9TDKJF%2BqjCo9tcK%2B8KT49Ew%2BbqWxAY6pgFU44wulK8XwnGWSNdsWnllpsGeaMdjA2m3ZSN7zSv9OEeCxsSOXIqltVdnMEUt%2FfUSrz78cTEFmhSxn7z888ZtJJ9uVrgd6FIHWmv1hiN8o6IiAUh3TNM3aZ6ZsTEjcQv6c6G%2By%2F6WgGRspVbr2wvjlKmROtCXgWysMXIVXg70jSLeqI%2FBo146vfCj4E1eONtct%2BgwMMGUSu3pF3%2BkyFRVaILs5spG&X-Amz-Signature=d3376d5ccf99e3cd40f94fe3951b72e4b691cd036343824ef3a27a7ee9789a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
