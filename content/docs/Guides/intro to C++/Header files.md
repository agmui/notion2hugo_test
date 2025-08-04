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
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNGIQA7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCICx5Up5JP3NqwosmgvNv5AIru0JZS3Q%2BKwktjnl6kICDAiBFqldd0IKRjkNyYGcyy7f89wXEIwO29WPnhxVqEKXNFCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMAmLhQj8iTl2R9B12KtwDU%2B3DE9nfJ4pM9EpDXAB29qig9e%2BYlSVx72Cb%2Bw5Zelgu%2Fm7cHfjJBG2hrDow0XHxa9uZVzknHuZ5VtRBtWGPcYKVNMsXK62kel58l0TvHhbonkzY08mRlUB%2BJZ6tJ%2FfuZ1luaPokaTsZ2EZYheWq2ZRBtg3zD8CnO8qYMAE%2BKrOWYF2AdIDTkjUL4xSmsiDLWzrqn%2F7Dp13LBxGgZVe9v2uwjQys8ri%2FN6AIgITgyHyTLW1yiD5HKUuCiWTCY8FhlWvjqfTYQb5%2BZgkxvQMHz%2F8eePwM8r74vd11lPIZj8L8ekZxG%2BeS6vW6POCHhdBLq80K%2BOPLMmnM8JyKkdFbe8pm0kNREv7U1KbYsqgr57rXq2JIo%2BN5hv60hbm6qLdrCpIu6YtqpWCr86j%2FA2%2Bm80xaYbwOOZQ5H%2BZ4Kpl%2F4o5rFkHVLzeojS1Thd%2BkulGf0Rki0G0JaItLmlqSkyEtvP9m94FQ1IdBKoHGw31CDmcQ6yZuR%2FV35IajRBQ0%2BbhgCmn%2BBWaNFOFo5p5ULoaZ8pPfzaQG5L2V5s%2BJOxt0kR3c6V4azXiAft9ppawLJFPeMOT4SLKh5Db0KRrNwxw7Aa6RpAztZKjr00X%2FY7YBVXv%2F%2B3jmQ3sYXHYRql0wo%2FW%2FxAY6pgGUIj07MzFDKQCD2C8HbTUvXyJ0%2BIF74BGBt7ZDbdG8TZJ%2Ffsk0RWzYJwXPeWQMLf4odNUVpHwXxkYWjLdG8tjkSuHNFv0w2gYPEIik%2FI4jIavi3mQeqTPQk%2BaY6CoFotBFAdu8c93QnxGySBtEuTls8U29tY%2BOz95rmIyn9Lugn5%2BIQ7MZ9jWBSrLXpPck5lhdrnDWxheFlmdzLNA09702kVGKOMrn&X-Amz-Signature=ee9981f306d95569eec57e8fc9c68cd13052d88af95615c614b16a6993d782e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
