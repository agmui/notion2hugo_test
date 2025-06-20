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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZLSLZFQ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9zHZipjJcReoudpMZUvyOMkIA1Y98G76q3FQJv6o80gIgcGUwdpnPoOjzNfuFvnZe9TLsmmyj6%2BS7VL3xxvzc64QqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHTyBshnsSX9S4AuCrcA9lHDVlwo72U%2B25APpTzUeHMRb9bq3hbF%2BPI3u%2BZ0KatPipNu9aKmfNAtqN0w3KOwNn8RqOGYk35YrHubrbM501tp7y4RS5lSUN%2Fg69UQ0pzm5svJxzaPl6iC2qgugCBr9vuO0c0ckaT%2FmlY9OwjZTszhqzu0F5PcM7CihOOZD3E%2Bk2FkdXTKNMDOtVI47jX7QDU7x5auXuZ194FFdHwLyTOu6iwOLFNL%2ByYn4OC5pTAJNyFAiG8O%2FSUfYqAgTSDYiZndva4nNs6FiCVnMCjMQLbGywRKUMSXDfRRWyNHbGhOvsDqCtqA5KNXZ4LmsHOqytJ094Mx8ekxWGb7uya29thLArq2HOkjrygYo8Rm5WTsO0d1KWzGIK8YZgnySQVSUIxS0AVG3wlvPrq0NfKAUAs%2FagOqOLL7XZ6NJeMaSDwnepgx%2FVxz%2F2zk6vAIqWukU3LSEpNAN1KJkn964%2B%2FxTult5Sx%2Bz4awjoR5MkvpY0sJUoyGl%2FALjhi49uLObv6jzVnZhTKxKvQsaqx1%2BDxT1Q8LJgCy%2ByYx4lSaICUxYeTH7XF1j2R79LHlZGdEUXm9utvnr2ne86MokeouaHJw86chzzMkZ2SlIzu77n3AVnMOOTxNSqF%2BGKh0zZAMLWk1cIGOqUBi0ZcnMRB1NbzPOzQnDNzz6hGQNgpirGVyHPhhhi7wLVFlmA4mS9Wlp8nxLiDScWpugrVtPyCyXk47RJ%2B2RRhka9Va55xrmWwjFb4JnuWdBASmxQEFcqwOjQLVxIWahFEs%2BZcsBF6ATy5QDtnEc1VqZBmZnciS1i2gR6k%2BNFNg4mMb8hdfurwb0h8IitzJrdBf5Ou6BLEGXGW4Vhej1%2FaFT%2FAdG0G&X-Amz-Signature=959c3fe152e852e3de29c5c785a0b091842c3342e88d8f06bb3ff002475eebb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
