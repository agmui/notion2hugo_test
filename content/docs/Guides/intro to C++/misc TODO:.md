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

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYN3ELU%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLS0p0ej0qcPAZdr8J0X4CqegNVdkSHOET4939asMpwwIhAOmj9goIoTYYZ8eJ0gl0PYuBh9fFmInpoe4vPCWDy4mIKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4FhZfpf2NyMaB%2BYMq3AMSiNAlPGJmOk%2Fu0MeFS3UrgN4ncA%2B%2B2O%2BARcPj%2F%2FesFri9vC8jT5PSpsXxBpFzSqEuI5a4qSlNC4vQEtVbufUl3fKySvd34CaFkvxycKcYUIcTeHBhL2xUy4nenbaXt%2B0W9xT3Qm69VoDErzm8%2FrWrvyURAoFgvw%2B7D7xh%2FnUucItOcRkxuSQLb1D0F5brerimLIqsVxBAfHciu8VDLTxyQ5ndQsU8nSQoIPb%2B%2FalLH04OKhc1Rw%2B8ZHXdY9vlWhUOvxdTcqAyeI1PQW%2Fzq%2FkKoBESC9THZAQ4k99UEfzAJf9fIeNBhGKCQ8QPiJ7tkUgUk1xsSVP%2FJeDtA%2FMxzgHZT2NPoDVRCvppj5uUsQzrk3zCNNqAv5NL2faEiNcbPnCXYq8eiSE0NQgk8OlyWHofGdsHGeerAdLqD6RdlhnZhzNDY%2B88HDWh6Z6dJCjE55r5ocAM9rC%2F0aCciN1cdTI0M8m47w5Pj5%2Bn%2FOUb8ibStxnGAOWDNz71uHyddKcpMTtK6NOMUmK%2F2M60GzXwHa32srTZmefntJOqgC02cjlLa1ToYhQ1AabpkvRWO6RwnXHzt5E2jxy510hjZyFl9sj8PHEd3yr90Ym4nWBPDLofLV1651176pnjI3eLajDd5PXABjqkAVSczbfcE9QqW4Y52lr%2Fz2S%2BOWRPDiQv60%2F%2BDcUexveQHk8Qbc3pZCjjEP0uWJdjOaCcrihOOZ3iYqG0c%2BbdSWy4JWchl6StK4hH1028j2gCm%2BHxrcMlU3dsZLc2%2FNQpDfzHmveWQul%2F6FVWdWUcW8yXy%2FVzmiFaQKHNRMqwmgaBMgaTtxouByC5Q0FH6WNgg5dUmNr0Jx54VeR1kQT%2FDF4BLMHg&X-Amz-Signature=50b9c2b4583606dec037b8fd2a453d6723e2ee77af362e3323e308842455a54e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVYN3ELU%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLS0p0ej0qcPAZdr8J0X4CqegNVdkSHOET4939asMpwwIhAOmj9goIoTYYZ8eJ0gl0PYuBh9fFmInpoe4vPCWDy4mIKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4FhZfpf2NyMaB%2BYMq3AMSiNAlPGJmOk%2Fu0MeFS3UrgN4ncA%2B%2B2O%2BARcPj%2F%2FesFri9vC8jT5PSpsXxBpFzSqEuI5a4qSlNC4vQEtVbufUl3fKySvd34CaFkvxycKcYUIcTeHBhL2xUy4nenbaXt%2B0W9xT3Qm69VoDErzm8%2FrWrvyURAoFgvw%2B7D7xh%2FnUucItOcRkxuSQLb1D0F5brerimLIqsVxBAfHciu8VDLTxyQ5ndQsU8nSQoIPb%2B%2FalLH04OKhc1Rw%2B8ZHXdY9vlWhUOvxdTcqAyeI1PQW%2Fzq%2FkKoBESC9THZAQ4k99UEfzAJf9fIeNBhGKCQ8QPiJ7tkUgUk1xsSVP%2FJeDtA%2FMxzgHZT2NPoDVRCvppj5uUsQzrk3zCNNqAv5NL2faEiNcbPnCXYq8eiSE0NQgk8OlyWHofGdsHGeerAdLqD6RdlhnZhzNDY%2B88HDWh6Z6dJCjE55r5ocAM9rC%2F0aCciN1cdTI0M8m47w5Pj5%2Bn%2FOUb8ibStxnGAOWDNz71uHyddKcpMTtK6NOMUmK%2F2M60GzXwHa32srTZmefntJOqgC02cjlLa1ToYhQ1AabpkvRWO6RwnXHzt5E2jxy510hjZyFl9sj8PHEd3yr90Ym4nWBPDLofLV1651176pnjI3eLajDd5PXABjqkAVSczbfcE9QqW4Y52lr%2Fz2S%2BOWRPDiQv60%2F%2BDcUexveQHk8Qbc3pZCjjEP0uWJdjOaCcrihOOZ3iYqG0c%2BbdSWy4JWchl6StK4hH1028j2gCm%2BHxrcMlU3dsZLc2%2FNQpDfzHmveWQul%2F6FVWdWUcW8yXy%2FVzmiFaQKHNRMqwmgaBMgaTtxouByC5Q0FH6WNgg5dUmNr0Jx54VeR1kQT%2FDF4BLMHg&X-Amz-Signature=ac0c39f7c1e8933761b82a83d0c891406884a33b8a45511936ec5fee96d94679&X-Amz-SignedHeaders=host&x-id=GetObject)

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
