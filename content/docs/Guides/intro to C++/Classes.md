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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ERT7RYN%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T031300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCyJnK3WU7EaTq%2F1LZeXjNQKhPOZMubdol5L59m4q7HRAIhANdV1p8Tr68acYe37DrYZH5AwJ%2FULuKk05ZXdpKAG8ZdKv8DCGkQABoMNjM3NDIzMTgzODA1Igzh5%2F9W8xH%2B0b3e1X8q3AMcGReagrTnhgAcM%2FgQVFhI3WjJHKlryhMkrQ9mw%2BHyB75ze3Wtv%2FfXESD26UMk28ugw3AK8YUpOJyOyyf2Tc57KxEEJCOXMJvEgDAaqd1gugTsxB8rwUsOSpy3BJiY5XkofI10zV%2FNLtHYF0Y6mpqveIj%2FqgJu%2Fr50DJu%2F53bnph%2FtRN4yVcv7R09ScOf2FIOqEsMRAny6MvoS0br3hIKVrYll6OfyMBtGvWZdHEOhFyLiLwTkYvtQSDX0N8d4UsJnjwfvn4uWxAkrvPVdb0NBOeYjZxKW8AqA%2BEhp1irYe22G6Q%2FZcSLCavqobLmrHWxiuDNp%2FETe0RlEmsKVK2brEkDDt6YsQSeH9S5XvnmLxn2P%2Bu5IQnZtqypsItlKZM6bG73DAXbv5A%2FWS%2FJ3Lq7dLzD%2BRy6dW3uv70xANabIxgtGlWJ4e8g8SXbsgGvSNkb3VyCwMNtYu6DJ1KwT%2Bs4GqkVYMkT7EvkslVVrARu17GX3SxCFPGq7NgIU66k9a7%2FHMDlhISvUqWn0BoiyAgeiYBPswEUMauuysKUVgqDFZpHn%2B%2F2c6MSxTFd%2FQQI8o2wqlT%2FN39%2F0SABlMpBG7IT%2FwXEDYN5P9eY9nDzqqT1DqdzAzUnb98kOiDNUCjDpm5W9BjqkATQ%2FkBujPm85dbjDslSPyxyQ34p7m65F8smUvhRMuMCRBxzrYRZRqxcaBOmV7ATemEOFUWRIHgLsJdKfjAjwg0ahdlLNZ1uibFHjvz9eURBpinFhfK2PqwG8z7BqhqV5qX6ZZ02AVfvfYWKrR%2BewrEogk5oRYHcD5BjvU%2B%2BKKZW8wiskYe%2BFgfwl7mCrG82Dm59cnM0K2vzOT1nAfS5c3eU%2B2PrN&X-Amz-Signature=b7864b4335666f5707d5d79e2b27ff39b349ee523ff361d0e597f6158844e3ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
