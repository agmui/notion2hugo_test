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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAPJMQVB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIHANvJx0EM5LByXlQ5te0enShiUkDXBFxp0Nl%2Fh6ZmLKAiA1iYe1JwoTAUmOvprYoxVneuCKvfd3eI%2F5RhkklroRKSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMh9IIKG%2F9lw%2F7q6JOKtwDAgFMzHaCwSm6mWGqFPBL5wuM6JJozzLdW0TYcyRt473dti0bIuz5YzV57klJ5qW%2FFvBCLlgtoC9E20k8r1Is7AqSQfLvwD9HHX4O08sOIJsTKmxbeCCdeZ1E1oIDm%2B9i23FnoZuf0plLHO6Hl9D%2BYYODL3nLtW396vEuSK2IXVW%2Fp1qKGqapTY6aJVr7z0ljHwnUQkrjV6empZQHEuoNT2KI1kNFQwfLBtvHrHZDu%2FOXPIyVQ%2B2VvNMOBIDj8eEuU9ZstCa3%2FHcJq0yw255%2FTBfgAg5KzAJbqgP2LL%2FunjDOzDYbVWbWLo6hSzBTGm7wHiA%2FGZeowkaUuZ612rO7xOBoYqVLpp8WQ5YxQrK1eS4XM98SbhiFlOVlGm8ACimjjHwqxw6lHjDLUeoJMMN6Ne9Ua9omZBJJH4NBTsBGG7n4BcXlmq%2F5v3hd%2F%2BzuYEmV6%2FzNhB2NgyLI4ZrH39CPveANgTpZThX%2BhVJbGH6ZZ%2Fc%2FyN1rS6p3Jmgy7r946ZyibeLmHbIDjC6FiwFjuXaKiDP0aDIFv1uPtpjcy8%2Ftn8%2FgU4hi3Y2ho%2F8aGVveFQ7%2FmS%2FDSjRDCRDp20NqWSgaOP1jiRhpu7lt5geJJ9wroVX89Lc4jjKxohcO4Jgw2rGJxAY6pgF7uS%2BlJnxqyuPtUg5Tu531BsjFsdntZhfQl188cJbm%2B849GtA2VWGX2q4iD%2BPsnurTWPydWXUAqfMNdBnVaOEedQi5mtFeF%2B%2F3W9Og5V2eG3JqeWuMSwSsQOcaQopPDn3GxR32ZvDGVZN4L%2BNhe3HrakDmnJZlpdXxZZnpQ1MTWAw5GMpm4bczh10xG0gZjcEEouD6H0ZKc6QH6mLWqH66%2F6XiAKan&X-Amz-Signature=68163ffd05d892ea5590ecc772b3ae86c5f1a0d507298fe6080e1a49de098775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
