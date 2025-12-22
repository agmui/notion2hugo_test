---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}


### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QINID246%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIEIw3DRvFgGlXqSDwQ6N40g6hyQhX4%2FxhSFJSu9JtBKGAiB8VTfc8%2FDFUtGKFfSMvhps%2BE5yOEU%2Btv5ZPoAt4fAX9CqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrac3eiSpHwaQw33ZKtwD%2BJYJZEuPN1GrNYqwScqbyftqLocMUwXwfAOkAzR2vaNhty%2B5%2FQG5rRD%2BCvc8OTyQ8BZQib29P9XBcsBPvT39qiSGHESw3CzQ5CTIIdx7vAW22F14zN51egj2uDhZYz0DO6O3IoltNo0MTR0vwj8Mwl7a3aumSPKGgop2NHti9fDiDm3A7Pk%2F%2Fqb95FlxL3HTaDGT%2B1ayT0YhT2rlH0X2k7VubYkvfbDdcyGYvJ%2FvJxqG6B6T85%2FEIR%2FspT%2Bc9FnxiJp3zVKBLlhVK7i38Fhm2mk79RYrEBdWC839ht4w9oycAwttg5MNwfk9hpSKXuqaB6aW3c8JeUE7sL2RyGDpQHuLM5i2xM%2BDOiA0CUG2wwR84UheLKC8xqTO0QQSt0EcosMEL2Bd%2FDfFLrx%2FS8LAx3Ocrwx9Dstk8Ndl8h0KfqaZXiY59C1vlPJbQPYphHcpPCIZ92Azg8bPPEPuAMoij4gCnz6Ok5GH1I%2Fj5g4GGbZeV1p5WslF1ItdgUFjOP6gZR6B0SaVr6mv0Dm2%2BKSul%2BN60nddkmQ5wPtBEzp1M3LJDJWRssQsvAHgyqn1Lvg03vMaQqNDQ1XnC9RE4FjiDv9OarEioCpWmhXVxTnCWGAM0sRiuvtreHTQdAIwmPmhygY6pgHXpNRvNSMGmCZiZoNgiH%2Fex6g8cJT8UKVs2f6EVu0AB23eNW9XnDQlqEn49IrdY9jkFqheJBrU%2B0Ba8F%2BnX361bsBemgTAUWsBu6P3MkaCD17SlXTgDpMdfCfK%2BazqJ32iPavdH%2FKXB9065P1ZKmdFFXonYM%2FOp4TEjtvXt2k6EobTCHuvY%2Bxac0Rq0Rf4Nkwy4IJfF5%2Fh1B%2FOHUGCQtgFG4kgD844&X-Amz-Signature=c1f07f9cf189678cfe35ee499a8c9f04e7f26dad391960d36a2e8faff7482d8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QINID246%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIEIw3DRvFgGlXqSDwQ6N40g6hyQhX4%2FxhSFJSu9JtBKGAiB8VTfc8%2FDFUtGKFfSMvhps%2BE5yOEU%2Btv5ZPoAt4fAX9CqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrac3eiSpHwaQw33ZKtwD%2BJYJZEuPN1GrNYqwScqbyftqLocMUwXwfAOkAzR2vaNhty%2B5%2FQG5rRD%2BCvc8OTyQ8BZQib29P9XBcsBPvT39qiSGHESw3CzQ5CTIIdx7vAW22F14zN51egj2uDhZYz0DO6O3IoltNo0MTR0vwj8Mwl7a3aumSPKGgop2NHti9fDiDm3A7Pk%2F%2Fqb95FlxL3HTaDGT%2B1ayT0YhT2rlH0X2k7VubYkvfbDdcyGYvJ%2FvJxqG6B6T85%2FEIR%2FspT%2Bc9FnxiJp3zVKBLlhVK7i38Fhm2mk79RYrEBdWC839ht4w9oycAwttg5MNwfk9hpSKXuqaB6aW3c8JeUE7sL2RyGDpQHuLM5i2xM%2BDOiA0CUG2wwR84UheLKC8xqTO0QQSt0EcosMEL2Bd%2FDfFLrx%2FS8LAx3Ocrwx9Dstk8Ndl8h0KfqaZXiY59C1vlPJbQPYphHcpPCIZ92Azg8bPPEPuAMoij4gCnz6Ok5GH1I%2Fj5g4GGbZeV1p5WslF1ItdgUFjOP6gZR6B0SaVr6mv0Dm2%2BKSul%2BN60nddkmQ5wPtBEzp1M3LJDJWRssQsvAHgyqn1Lvg03vMaQqNDQ1XnC9RE4FjiDv9OarEioCpWmhXVxTnCWGAM0sRiuvtreHTQdAIwmPmhygY6pgHXpNRvNSMGmCZiZoNgiH%2Fex6g8cJT8UKVs2f6EVu0AB23eNW9XnDQlqEn49IrdY9jkFqheJBrU%2B0Ba8F%2BnX361bsBemgTAUWsBu6P3MkaCD17SlXTgDpMdfCfK%2BazqJ32iPavdH%2FKXB9065P1ZKmdFFXonYM%2FOp4TEjtvXt2k6EobTCHuvY%2Bxac0Rq0Rf4Nkwy4IJfF5%2Fh1B%2FOHUGCQtgFG4kgD844&X-Amz-Signature=1386b6e442219558a38248881324023710e4543f95caf0b35642f6baec63cc2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
