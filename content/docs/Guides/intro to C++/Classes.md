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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIIPFITZ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb3vCAaG5z98QDfsBFwLw4qq0mqbWJbD66%2BqVB3IEhsAIhAPcPFNq4F21lC1kOi%2BooUh1zWNQHUp%2Fgat%2F6tD5443U6Kv8DCDgQABoMNjM3NDIzMTgzODA1IgzwjezXDGumvhLRWPgq3AP%2FLxL320%2FnkjND8hwQ6MHSsaiHPdkWzySVHJKOOVR21iz5ZuVxytnV5g9sgRE3sSmDsRZ0sY4FcB6Q9P4%2Fws2icIpXs9jPFOWdjCdy4iUJms6fHlG0lAVjBRcj%2B%2F3pmRilNlZ9VkhS7dub2N1cDGQEVU0u%2BdSPYu5kyNORcdy47RxlNyFK7zTozKMTZjcg1xKvsJ5fj4w9Zs9Z97L2p60jthYJxusi2BF5MJhROW5PyY70fP7ZsFbEc8L%2Bs9AmDvgGujsat3XK7b0bm78bnIcrIO4ECBHN2kYn8BDZNAaCuluYlQrXstY4ljo%2Bl8wKgCfBN1pinOM1dS1siMYTg%2FYYP2JqtVAr2Zy4yVmjnnmWMy59UsLQ21137M8fs36c4DoMN%2B1lInP7di%2F4zHnVg7gskobdTUjKDGDDxnsyu6nsEzHNIOBNBCF441n9KVtTwa8z42sCb6B5s1WInguHPIg7LEJ74P5EGKJXsmb44NSH%2FitjPQI05gTRBE%2FN%2BOEN%2BtKFMiNX5iUQPGcIATIy5jQl%2Bc2M0dxqlhBgCnNrPO2gNmOrTPttolMxlnQm8%2FrjXt5Ue90UROGOrhGBFZw5HlAT8IA5Jr6crOBt9LTeWRh0Uahx8F%2FrWHYAFyhw7jCSyai%2BBjqkATpc0VvxrfKwB%2F6ApOQQGYlps7IjJKPKbGFQ93JrC%2F8JIC3nRNzI7hHPHcLMD1OQZW8IO%2FjEckZyDDYhSZtdbqA5sD1wC0XvzJ0%2FBws8xY4gosQfU1YDRe4Uo9N4nka1Aka1lnunRFsHTEyWYxauZcVyXR%2BURVzb8TLgdDEFrvu2vmU2jh9xu4cE0Jsa1QiQO1A7r1ZVphI10MuWsNmwP6qmye6J&X-Amz-Signature=4cf09bcdce47dea0592ec67ca44393498b67f01325e40141376ae3ed80f1b106&X-Amz-SignedHeaders=host&x-id=GetObject)

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
