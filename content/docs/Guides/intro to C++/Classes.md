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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466265QWWRQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDjFlnAGlkQ8%2FDJVIatTrpfdo5p5D8frQjcgE4AQT0ELgIhAL4KCgGW4UtyWIHj8uaifNyk6kh%2FPhW5VbytePKJZ3o8KogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxiy4W8gaY%2FTU%2BktI4q3ANqLh75qYt7EJtJ3KPU2bK8MTtIXEWl12SN7uIRT7LChpqkK4v1%2B%2F78V2ZAiiyx27iJRLXE7LulPKl7ce4Md4y6PHqINae6VFqVf0s2PacdfMjQaaNQiD4Qi1Z6jGk%2Fp8GzvVmcKikx8LxH2lPW1sUHJNNkZpKlFcxa2Q4nu0%2FMnVEcmeG9O4NkAb1lhN%2Bwi08Z7oUB%2B6lOnoDrdAOPfxautY1v8L6ZZwWakQTwZo330SKxMW%2Fw1%2BNvTElW8Na9miX0Z9LcGXqH8%2BKawWawNK7hYXoewtQ%2Bv1PsSJ7wV5GBg2i6WwoDTbI9heu5WjhYsL55l6924%2BCcze5KR5GRCozfk0OSM5RjCdk8owLf%2FMb58juRGKPhzN3eOx5QiJNOTi7iwa7LH7X%2BmXMnvYiwD3QG8MEzll8x67SsJKrs1pFGPo7wr7ecjQJ1Zp9M5mMNpmeHhZ4HxxOpuNJJQJEf%2Bb1Zn99WYbWqdx1fmtYi8G%2FklirJJyCQyx3k5EHzAd9sN%2Ft%2FTtWLbEU2oB%2BP%2FnwEUqwxEM0X08JB1hb7j5D7n2jWKtjCnWb9m6%2Fs1YCQriKmoiqD86ynR%2B4Gk9%2B%2B1eAhnqGdGqJknEH2nA0haxqjPKH%2BebX0B690kxqOobO1NDCwosi%2BBjqkAWRRWQri1rt88%2FsLliu%2BlGHgjRJDB5HLsPwr7yA2K0gaYZmd45GhEgs5Tl%2FhvUkhBlOt8K4zJFEGaSH3LiE64NDgvJZmjnUoaB8vpyyORdK2MC71%2F0%2Fq6UW4UXqytQgi%2BqPleXRaNFC3Mwq%2FSCXguBtmNQ3gVp7TfHyd%2Bg2efijhBo%2Bn0JadSa3lTpK%2BsrlW%2B8KMGj9MyFvUeScklA%2FL%2BdIJYFUB&X-Amz-Signature=b4045c065fbc0a1305bc2ba81072879a6db6d5cfd9da9e51c387b881662953d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
