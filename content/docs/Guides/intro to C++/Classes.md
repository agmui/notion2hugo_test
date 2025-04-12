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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WL3P2I7%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCKDA8iUG3xSsfv8oKbPS9E70Rrj10CGt1f90Ksnj4oWQIgM24zn%2FSn5cdJ7xKDspRDPCId%2FizaF1GmZhCd0MoKrygqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHY15io7UDxQ03o0%2FircAy9JoiZ0lRPpiBnpkXlA0JzjkDhGOGSthUpr%2FEQKfzO9eafSyUcv3nLwcKXxDsUHM9Ll7b8ZBxfqNyA6mpvghO9rratDktiAreq2MhAuYMcESoDpqyqYMcbrQuo%2FHDiSjmQriTHRWUJjpga%2B4rtLJh48SiNHz4TYT3%2BjKFAczX8wZ%2BYi0yQsNxHJZfYM%2Bzr0cnezaEOU1KIB8zqZ6nx13s%2BQNxZ3FujHajj8NiG4TZor8gA8psAJMi53Jb2EoGoLqkbzSLWqCnOLcbP3MzdKk8rmnlDZCh6DffYkgF2qCgPPXWOhF6fkzqnryUvQTkWc4oa88hZn5%2FvHpXIRym6GF19aYRVYQaAX7aF5XWI9aVUWjFw2eEkzrMnavlb1ZZS%2BNbiy%2F7JccQVidQLEiYhLRPuazZ14iX3m3TPFUJbeRvhvZ3ZfInZdj7DWsp0AoWic%2ByNDQBGMAQ2b3aP81OJiaPQEzLgVtoCUEltGY9esboaH%2BAuR8wvX7gvlac8uYzjXpHlB8X0Uhh7IYS0VUoqQQgZMhNxNmHQJ1FZ4g7PyLbPJwkH%2F9qNHSWjgtUMszBUS6lAIXeHU9DI12LowDe8RxCrrFrTeSVIwYWFlkfsuFxo78b1IgYCfLoouF9A8MKeN6L8GOqUB0ZMxeKRqg4lP2FTQEcdIL90jfYu5wPdQZWuutf4ap3CW1aJzECBxp81%2BnJHxLX8lcRBi5w0eoHCcyzgbfnnNpSuhN7pXAWEr9fQesQUtafhbIQRXgtSfJHigetpj%2FvQn5Cpzy4ZTtSqCsjAxP9ii8w3AXO7EGYJ0UFz3J27KuNzutXXDsWMaSv1ltNoQNuqe23xm%2FEo3XU4D33EDzSmbYHlm45pB&X-Amz-Signature=e6b0d369e492b9e087fd06abe42b8d478faa83c5b747470dc38ffc2707985986&X-Amz-SignedHeaders=host&x-id=GetObject)

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
