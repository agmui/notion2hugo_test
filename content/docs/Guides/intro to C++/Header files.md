---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

</details>



`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CRYMWZR%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDP5gTgJ%2BqxJ1CoiXHvByGtfQz4PxtZyzHIL1FFxxqfGgIhAO%2F29a4rikgNWc0wI6FIVeaAG%2Fb6UqQlCAB9M352LBLAKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxQ%2BUahn018HGzoTQq3AOa3hl8mZ%2FaRm5KpX8zWQgtTVzXWLEDZhJC%2F1l70G79XkML6oyBQN8scPLqJKYLw4yqkZLg5QKpGDp%2BSKzpaQqZdfehf%2F0Oa8%2F609X3Yp4KKk38KywmO%2FnqN0f2VIRgJNSXZR3Z3NmztlXQpFJe5nOd%2Bwjl%2Bvqk4COmz3MF8Av9k3vYVwYqgOd7CkqAbXm09Uscf3nBeKv408vEtp5QB8I4bSikhqYkutT%2FPHam%2BOTn9SsejG5y2i7qEuR%2BFfK%2F5HwQwRS0y9MiM9BOD%2Bvzf5Ll2fy8tW%2BZUbA8%2FNL2eTH2XM1Rrldt5PmQaB5btFJZzVW6gtfLjIsmvXNkHUjCvvVd8CpVHURzzcZ6PRgbQWPkyR9KDuD28cZOt4AAGBSTYMQ8pr6ljjlqzOxsez89aCltnj1WFlg8I3QcQXhR%2BzR%2F4jkt1x2wdA0rJeZ1240mpHD%2FEV2rj8M0dNnplccuE1zn6emKXIAi1morHhtx5I8gtUAsSB6A6Z27Cex5xgWl%2BtV3ZqSmB2p0mQd29lbbbBhw%2FshIMl2XgXaDzCqh%2Bb%2Bb9b0lLefm6WV8xPQOFfgfLd%2BKUr7qjn%2BUfoxnxCCN2Rgwl%2BmGj5JAbJngLYHmC6qR%2BulpBzI0qXEes90MgDCSxPLFBjqkAY0cjse5dPOl%2FhWIcWqdVWM%2BMMxoHxKvRt9Dwqg9T6NJVqj%2B1GgjwGFIWMYtItMVaLndoKQ2AlK3NC7LgI%2BItLbmqaUuCTpguRzbnjs2bGk2G07F1eY6lVVsPlmj%2BFBxcm3qJ2u6Yo1xwuTw0rc9Wt7d2ZRFp9%2B%2BVANPfUheNrneBxj4DK0g8CDLG4NWV0jxqkqGpKFtfeGT3znGchBKQPm%2BfGsz&X-Amz-Signature=e2b43488692f768ea0a063e3486043c817cc7c0fec696889943c72576ee67310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
