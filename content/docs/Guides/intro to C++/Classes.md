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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IF5TNPS%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyYOF4WzMq1p2Gsts8MJzvFzDBdB0m44QytNp9az%2BcgAiBk7UE5nQbN01liMS9cOLjp%2B8MbqxsiB6WS6LKb67pfKyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIz8rQENgjgH%2B%2Bsk%2FKtwDMBVnTV%2Fcz8awH33sQoZE6WNUUNQF4Ipk5pn63M2BjeAa5Ei3IcdEhQAJh9LWnb2bQNu39qz9mZP11KeHS1ZlPrYLBx85OITVCXSU44ne23h7DKkr62LTwusv90zHa45yXPrvEOIXb0ho%2B%2FIA9BJuJ37QHadFKU08zGdjsjjGqPQWyHUICNX5U%2F%2FGdKeYAHz8jNn4XKLq41nnVgD5k5eTpMJqEKMMQJfH4yfridKBJVC235athSMODYUiyG7vP%2BPwGiXUGclqibT5dWT72nrd7h0IY%2BEyDxR87BCAGaC9c0ZckGzeViE3YlkKuF9UKeHCAUIU4ts08xurmxSzXD4Hk%2Bon59B6iEA0yXI7h1rDo5m8jRd%2Bq6ADUs9mtf79n%2FeT5hj6cJxs7N0nlfkYXtjOHYlUzOrWy9KWjuLuS7wc5zpTwnEMO%2FpiCuN2it%2FJ4VxvZ0GxvLpf8n3fsSTDEYA4imh79SWchT8xb%2BDy%2BGOiZmbs00DDll%2BiYo8%2F5TojASL5gvjA2RemNxDrZrX8UVId35qxxG6ycJ3euEjMYL%2BAxlLTTUGJkbYkT1e1fG4sHWRlRBcnPb%2BnS87yxEi0tPqIlHKR%2BB1ewG4kTfvxt3UHkKarrucbdC11iLVxHtcwjLjuwwY6pgEP%2FgpCMhn60NKscX7fMDRqprhDQvZVA8mn3YfsCyN9RkhLQWzrsxUutOa1RQUINdGNGzIUXZJF%2FDJM6Rdve23iA1IWleBz4BU1Z8S36COV3ZAmOasMfA0ST1kCBqYg4X4IZyG9ZfkV1ZRz28CKD17QEYSAcaTpdhq5W4lx9QYJ4JiKZMc1xOp1QErocPeH2mWsBo6iRAuBl%2FQbytTD3H7b%2BVs1%2BEBa&X-Amz-Signature=66bf680cb3496936a8664ce406b48d1eb2aa29bf7ced625c1c1df8dc0f6533f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
