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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RGOJ5Q%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHWTxEsDNAvW3%2Bc01V7Jxv%2BN36otoZkAmPjoZ6w%2BUIRVAiAngfHeOJvRgT1ctugeMj8UbOeJ5UgXMEHZuMAjIYtLaSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMY6FU3TywEJWTNcS%2FKtwDdAbmAV%2B8mN6dT7fBQuZWOl4CbaUO5sLRBnN3WiUP5T3rFYRJG7zcPuP4%2BCkMo7qPFONka8P6hbk3qWlW7dXYaCvEyNYlBAH3K2rd67PLfzNc2zbSiEehGfuJUgISHiizLAW2jWXElfrzgqdGnF98SEgTRygHslyxhW%2B5ZTNRoeo6%2BXCoKzmp0bu%2FL1tfaf7Wp%2BDp5CekZaXiirmIn2cMLSQhdcR5C5kw0zfyJOiCoSMAloJaTCJbKBKv9jUseBl7R8mz1nlnQodbyuxIvtVY6gAN0okjcBUZa72vjnfSc8N48t9JLox%2BzTYIB2ox5sqehcdmXyM1NgTjwMZws5DG5kSleZMcr5xUvaPwdnBBd5%2Fj%2F6jM9JWIdGJhgDzOGDxUTn1nJbaN1Rxw95w9wWF%2FsAGclhsr9Kj2WFg2fV0ckTQlD2JCPn3FJWkEm6MRPdLWyx2tBmlZzHdJv7WgBl94Mjq%2B%2BQ1BAkihSJ%2BNHEgh1Hrpdudh3zLoBFouojHFtGKKonSq5CHQREj9Uc5WtjtfPH07bIKv3GW8EnHJ9HByPaQ3Rhwh%2FwfclF8ak%2FTGa13Wp2wltzDYY678jq0%2Fk9%2BDL0QMadVqZmO5xmY4zy3KWlp4EtcFTwQuleSbCRow9cG1wgY6pgHYfbfO3M%2Ft17e73PGYBpsvxig3NGI1136t1wPctiaovNEe28urjvcRmLpeUq8WO4fQAYf7m0HSvP404kzLqnTz79QsryW7UmWpk5DrR7IJlobR7khoPRl7rEHF41hSQ2j6KxCLbnwoV3AxWZhH7XyA756vhahGPl8sSzXcr2HcbWNTBtyorGr%2FblgCPrdxOYTpmpuMiN7zdypVGpVKSw%2Bo8%2F%2FY8P7Z&X-Amz-Signature=edc79a77611cc6494e6882706771c700f0c4b3334050fdd1303adc8924eb0864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RGOJ5Q%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHWTxEsDNAvW3%2Bc01V7Jxv%2BN36otoZkAmPjoZ6w%2BUIRVAiAngfHeOJvRgT1ctugeMj8UbOeJ5UgXMEHZuMAjIYtLaSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMY6FU3TywEJWTNcS%2FKtwDdAbmAV%2B8mN6dT7fBQuZWOl4CbaUO5sLRBnN3WiUP5T3rFYRJG7zcPuP4%2BCkMo7qPFONka8P6hbk3qWlW7dXYaCvEyNYlBAH3K2rd67PLfzNc2zbSiEehGfuJUgISHiizLAW2jWXElfrzgqdGnF98SEgTRygHslyxhW%2B5ZTNRoeo6%2BXCoKzmp0bu%2FL1tfaf7Wp%2BDp5CekZaXiirmIn2cMLSQhdcR5C5kw0zfyJOiCoSMAloJaTCJbKBKv9jUseBl7R8mz1nlnQodbyuxIvtVY6gAN0okjcBUZa72vjnfSc8N48t9JLox%2BzTYIB2ox5sqehcdmXyM1NgTjwMZws5DG5kSleZMcr5xUvaPwdnBBd5%2Fj%2F6jM9JWIdGJhgDzOGDxUTn1nJbaN1Rxw95w9wWF%2FsAGclhsr9Kj2WFg2fV0ckTQlD2JCPn3FJWkEm6MRPdLWyx2tBmlZzHdJv7WgBl94Mjq%2B%2BQ1BAkihSJ%2BNHEgh1Hrpdudh3zLoBFouojHFtGKKonSq5CHQREj9Uc5WtjtfPH07bIKv3GW8EnHJ9HByPaQ3Rhwh%2FwfclF8ak%2FTGa13Wp2wltzDYY678jq0%2Fk9%2BDL0QMadVqZmO5xmY4zy3KWlp4EtcFTwQuleSbCRow9cG1wgY6pgHYfbfO3M%2Ft17e73PGYBpsvxig3NGI1136t1wPctiaovNEe28urjvcRmLpeUq8WO4fQAYf7m0HSvP404kzLqnTz79QsryW7UmWpk5DrR7IJlobR7khoPRl7rEHF41hSQ2j6KxCLbnwoV3AxWZhH7XyA756vhahGPl8sSzXcr2HcbWNTBtyorGr%2FblgCPrdxOYTpmpuMiN7zdypVGpVKSw%2Bo8%2F%2FY8P7Z&X-Amz-Signature=7795c201119d7d1943f750e55ea36405e01cc8b6225da6e61d60bd221c42a2dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
