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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT2YN2X2%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T091514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBd2eD26WdrvWQCObdY3tJtcq6DKEVmrCOXNHVzYMUOMAiEAimBvH28LoSTUgpkw3vxx%2BQe8IX6JYGlFfiCK4OgoBYMqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcs9B3nRxaOIhlMryrcAx7erFljdMLykk8gPW8TGU3VCMb9CYzxvRIE9OHfiZ09Pqt%2Bbwgj%2BW55sRbOeTRceMijRqRzK5aLFO5qM%2B1Xv%2FTncF4Q66nZGurtDtd1Rh1DYsLtcmtJmpR3DtQxaPv8GHlxo8Lz82YcXFpWwFvZWxcbw%2B2n4ZG6JvLceV6xd%2FmBSxg9t%2F9O7TTDQbCya9qAVZ9dKajE1%2Fnz8jeDwAwTGNeIdHQbxtCtBo48K7%2FGyZot1oJMsAc%2BVLeNjNSr45%2BSVZF5TlvZsvV0aMetnxmE0NpCSPrr6Az0rbYmSKa0Z2Z4oRjdKSHET0tjjRCou4ZwZ5Q8oUMqH3ca5uFIK7V1VKbu20HP8UtY740Ha5F6yf8xbDMMEL4LCNs8XavopODZ9B7%2BGXU7qeZPDIF5Mrch9uE3strTrFhpwFJv4KgKUx3vGNQTkossy68Ks%2Bn1bDUMKMVl%2BBM%2ByXkE8XnjagYgQBGwBDsqJOw9Jw7jUfBA5%2B2uTfUqBf5XBLfZ2njFNkijiTDrIf9G6KbEdC%2Fd0yjM3FpoB6%2F4TkTDgtnTo1Z6l0p%2BcEytamf2lA22wCVQeiyncpo4yVm0kcAChxVCqa4qtntJm0gJFkCyzYm%2B%2Br9HNVnbs8Yj7zU8v01d3If9MInsscQGOqUBwcuq47J1v1%2BxOFbDWixTNc541ozNCIJoGMxjwlW3I1RYfBLy4bYxW0HelE5PUIcJxrHEsK0oI6%2FU8vP16%2BiFfSkCA7TxRxT4j21v6zh5qbvrH%2F4jwx9rtN7jqPR0WY79zc0rlNdvNv2XctKj3Dqd8n4eUfkjtFCwelXHRlGz2zC0WF7J4ooOtS3A0uNSHu7Tvb0peQv4CnKvl7ojSH12dB3XMlO%2F&X-Amz-Signature=ec80ea5cf47c638282d5416b4c9631fee3462848d072da7038b9d203107e7a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
