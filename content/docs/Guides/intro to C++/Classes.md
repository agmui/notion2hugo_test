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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDV7ONCO%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdHnU919Yf2jpRIn%2B6FMaWpy5RMjfImhaj8SDz7djt0gIhAIgNWerE%2FmGTFEanGPXbGyQdStR3vgveeCs%2Ff0tKVJOYKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdowmUDUOdZjFP7YEq3AOLihFarUIZZwaQUSJaUG5F%2F4m84LY5g%2Bg3tJEYhuvumVypdzCkbpZiJSxBkly0DjRs3r5%2BHgb7U6CffUbrSc7imYlTz%2Fg063Ws1NKAw1%2FqFGl%2FZPEX490a44DU7AA6PBHNVD0kvGQkzFgdLw%2BNR9uDk7xO1VdpsEQBLJX%2BJgP3NjIYUEb0y6MUYaasrJjzQHTXVaobmLsDFY9c%2FI3%2F26VqRToWFx3KOlpgHx9I9wym4PIe322nhEIR%2FLIY4Uh6LIKjZoEV4Duzo4zLQYDHUYZ1N11558TBTBOOxs9p2xXZGq23yT1tDSEViMX95sKiQlBt1oTS%2F0SrhZa16G1dCmlY11vkwwVUSpTiFnJqrQHIzCXDP4Wn8ki2WwYcYVnR%2B%2Fd94PC%2BxCMiGVwtI%2FxOaggqPCwxnTRX7BMfiidso44bBTHsv4IX8%2BGdYHTl%2B%2FcNjxO8uo3RKa3c1Rv1nfKjZSLJessGsCqnwKhFPcgb4VtJNYjkw0MzKR%2Bcx0ccJTAmnTuIzmq3swIrrCbDkA0%2BOGpwvX9f570mtVoyuERKLzsQ6vvMomCnUh7RqVrWba7JBR2kTIyn7y8%2FhA4OkXlITkZB%2Fl4OoLP7o1%2BUnon4vfurxJrSf8dDS1vZoRlYbjCVy%2BXBBjqkAb66Rs83XrIjZfVRG2bssnJTXLfPWOgblPwhO6hpXQbmPPWXdM%2FcJFuWJarolFOM7Ol32tAwLgI8fMwkdXMcQy6hIkE%2FlEFbkAGim5lubWN3NpDji6H1OTgUKtVKoiTi3II2R5XNZBSAe5CIn5YBcHIo4QAnviI7yHEafuhpzmuCHJY0LajR%2BO3h5%2BeCo5OcPNR0%2FxnRsg1SryjmzT%2Bz9E68wz6N&X-Amz-Signature=5366523a7e5208d730c92046c6f99f9993989ba12a69694d903a244660ad82dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
