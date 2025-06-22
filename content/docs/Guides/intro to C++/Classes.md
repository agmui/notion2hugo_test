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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSE2PY7S%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDs45BJZMSNOzhEvGLyashmnuv6sUV%2B06tFiqFkxWG%2BTwIgMHBkf0mdKpGilV7%2FB7dtAPiK32nCjCVr28tBqSQ2PN4qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPe7AnnvRSaxoYHHHircA9jrP3r2jHCd9wmof8Hm1q1MGDJ1zS0gizuiA%2BcxSouchikjqgKvAa4Y%2B4QsZEzdzOCyrJS4KFJlWXHNdmmj2tg%2Bg7bhMbOF8W8BZNeK3fBGB8KEvL9lE6IRGDctEQ5HEf4GS7fym2Rkd5WLU32bhc3rO0rsG1nw8pyvTyRWrPwXWnx5TcaVzuwJ61oY%2FkvzFzD5KRkjj1NhiuaMlDbMcMZ5rSiLriLI5NSJwCaELNKQvWYtY3aniYTUi4lbeasZ0%2FEjZtWWaRgyh5w9tsFAd%2FjUOtKUIEPDXCQi1L%2FEOFYaEXGFWjbFJeUUcu4TPYazyge1JXUv7Zcw0qUfO%2F%2FHOQkJF6Du%2Fj99kaQlbQ3tcycFwFRWqYvpQnhP3PnJ7ygAspFqoEtqSHPO3la5sDLH6P0O0vNYPaBWBqNw43umm0A8Gepm8wkpvqVhp8oqcK2AJmkROA6AQi5w31bK29TaRbZIqnIbL%2BrIJpkHBf60TSJtTXYqviHaGC47ZUZBgpRJp3JZR6mZD5bw2Mt0h%2BqHed9kv6GDU5rRsfAjdXSCqkId1kw8oCTk1MT6yc%2FoX2819%2FjURM5AfRkCtd%2FYUKLqHT5yiKFy6Ka8XOXbxLUTMghTxGVpClNFvAklzj9DMIW%2B38IGOqUBWBP8xuSHavb4fJ%2F73f3lGtMo3B7zufv2piERwNkWdid3CAXOYRJdIARY8FufErMvWnDdapdYOtDoiFVd2YwnqUuOmYa9CDpVwn2486nV2BVCUin2oEFQ2F%2BLTVw%2BR90xFsJu0S401LE4N5DbOtQkR4Q0It%2BHmbIrhonKJ3X8ie0UrW27AYDAFlmdtM1qCPM%2B9AWHIL9oLzMR%2BR866JW%2F691M2UKb&X-Amz-Signature=22a298e9cfc90c8b3f07f9f0fd71e1eed4f0fe4d9e9818b406b153e9c2dec17e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
