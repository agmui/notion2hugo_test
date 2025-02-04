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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAH4NLXP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGBTbn9InckigMM8mbUynXjkqFT1uJjNRT7tGqnzpRYEAiByeu7raH9%2Fv5%2FME4Kj0iQUPfHD7O0Gj8yj9wMHGZDrjSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMzpPq0ZpcvQv8wGn4KtwD8taQH61lvxOo59fe9O5IqD5eKiHq806bzEFkeQrxBvtiGo4wdveqGKQmGKlNLXLl%2FeT2%2Fh22jwghNjH0EwEzfboM6kRbFijde84B8EMBl7oP4tC7iMqJEgkmjL285Ch%2BW7t4evKSvhf4ynqA1xYhgulP6c4h2nYKhjxDK9sqM1hWqxc0872FLu0TxZPrO8SE6IXWCBezGyP2j78vm7IKNwp15jt6zHzsiukuVzQIa29EPxws0mGA1Vk%2F0rExSCsh2Nbz%2FsTpVgWjDlcnrPYHe9wg6MinlofZA7UaaRuHMvwvUx4Q18WBX5Tj%2BKW9vfemnOhEkfwJJmuWOM%2FimwJvoPOrednBXJ5ovhx77jBPAIWtq7BNgrF461xg6WZlC8FC%2FAuTD9Zxfnrj0iiKU8xPJIyty43%2BwVoA5AYy0rwIFyoXlRqnbcXpwW3bh8ZfpNUGV0qMkhxqFj%2BeWMpnKAa9qTbK%2BygkTMgM2NftXhkhriIjYkEwpIMJ9ACgrsv0YIDDLdKoLy5mcncb24CoMeDHnay%2BZ%2FJqw8kUzzQSHWGFOPgJSKgUUSl4i4GhsbV3vL8GdIjbeQL3rEb%2FBNSJSXNa7LWk3lydwMBVxMlPra4%2BAqlWj5V8%2BLr8GPkHQBEw4eqFvQY6pgGEQi7wcG7GoIc01xrybm2cCxjoTsSuEN1OZL%2Fr5PjXS8GmWVpOH%2FYVB0h9K%2FyagAhfdTxBlZcQe570ICWvhjo%2BIHZAODSwwkXqiIjW%2FL11lzo5dJ9ufbGqQl9gLhE3DfmJWFpDeN%2Fy6Pdu3B2FImrD2YSRE%2FFYHZkehwcQpJb143eVn%2BtZeITIDa2bxjQEvbXa5XSDkqQrM0h3Ec7kx0HuG9Sbx%2BPy&X-Amz-Signature=252708ba507a0f96a4617744376816fcbd63a836d2c8caaeee5da07f8326d0f0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
