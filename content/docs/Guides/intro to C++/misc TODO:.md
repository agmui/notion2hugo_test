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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNT4DNR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwx%2FlxdLTHygXM4YsCII3ugvWFPmFYExCazxHs0cdvTAIhANpXmEMLVu2%2BnoW7QKI%2BazbQfltKyqJ9FmHCrAYhTK%2FUKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhQOZufqbWw6WE8tcq3AOWLt54Wzv7mrIodRYeXNY59WoFmPOdo1loFDYGONhQr37Ve0Jop72%2F4SAQj3nhHL4woeKqJ6USBFaV8dAhWXiNpvDlDZR9TOqN6ybAI91LXHgDHp6oNufMdP5wgfFVBu3xE7%2BLrYU0wUzPE46VckSoD7Ws0safYT%2F5QlUhVfH2S0xnhILa%2B%2FNNqmfYEUQnIdRWWjYikKoO1vTXVMUinEhgzVY12%2B%2FD%2BpROg%2B9RNNZt3KD1SkbOsn%2Fq7hlY6uRxZvD4UUAkQSahhV8dqKTmkJk6ncSoxdjwvRhh%2FWB2WTeGHu4FaoLA9isfSI18%2F8kVeMD0kTvmFqFwlRpSndEELOMUO8zhpPk2kUSsBsP0wKDJNZYso5e9FrW82gCh0YMKN2R5jJi2i9DCAPjx5fmPv6I5sLKJs2Voto8EWL4BP7Pj1SG8jsAfrCnMwMuyjDP0oFfWStNnizsreR2HL9u4dqRQVNh1%2F%2B5JMM6Vql7r23tJsjNzlswtBetqeuYmmmydfsaMnrXvup5hURJ4K1WFRbjcltrcQn7v9Vt2jyUymTyC3VnefeHrymIlC5iGLch5uWOTHmBI2gI1omEgYrwAOoZgzMOpfKz9UvtOeMyiQibks%2FG3GcXrsNZObKGGyjCY2aa9BjqkATChbRU0OLD1qqR5smbuniyQXij6Vz7xxts90%2B2Ga9AWgjmKPcUcX9ODslYuNx%2BOTQCVhPS1NYzIe11GcuMnnApuoTpr6SwfNPL9VaR23pWK0qvlabyX4Mna%2F6fd7jvb5CGciUteURI57ESPzwxNz1wkE%2BEs8L%2FX0yqqHRDiis%2Fc499Nf3XG%2FYeP2D95Fhc5X5%2B8X1iit2JWEjlGzJ5ZkGwOM61x&X-Amz-Signature=9716b2e98874ec1f44a1ea2b61d741c3d3c1f696dae64285fbbc8a61e5f5d73d&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRNT4DNR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwx%2FlxdLTHygXM4YsCII3ugvWFPmFYExCazxHs0cdvTAIhANpXmEMLVu2%2BnoW7QKI%2BazbQfltKyqJ9FmHCrAYhTK%2FUKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhQOZufqbWw6WE8tcq3AOWLt54Wzv7mrIodRYeXNY59WoFmPOdo1loFDYGONhQr37Ve0Jop72%2F4SAQj3nhHL4woeKqJ6USBFaV8dAhWXiNpvDlDZR9TOqN6ybAI91LXHgDHp6oNufMdP5wgfFVBu3xE7%2BLrYU0wUzPE46VckSoD7Ws0safYT%2F5QlUhVfH2S0xnhILa%2B%2FNNqmfYEUQnIdRWWjYikKoO1vTXVMUinEhgzVY12%2B%2FD%2BpROg%2B9RNNZt3KD1SkbOsn%2Fq7hlY6uRxZvD4UUAkQSahhV8dqKTmkJk6ncSoxdjwvRhh%2FWB2WTeGHu4FaoLA9isfSI18%2F8kVeMD0kTvmFqFwlRpSndEELOMUO8zhpPk2kUSsBsP0wKDJNZYso5e9FrW82gCh0YMKN2R5jJi2i9DCAPjx5fmPv6I5sLKJs2Voto8EWL4BP7Pj1SG8jsAfrCnMwMuyjDP0oFfWStNnizsreR2HL9u4dqRQVNh1%2F%2B5JMM6Vql7r23tJsjNzlswtBetqeuYmmmydfsaMnrXvup5hURJ4K1WFRbjcltrcQn7v9Vt2jyUymTyC3VnefeHrymIlC5iGLch5uWOTHmBI2gI1omEgYrwAOoZgzMOpfKz9UvtOeMyiQibks%2FG3GcXrsNZObKGGyjCY2aa9BjqkATChbRU0OLD1qqR5smbuniyQXij6Vz7xxts90%2B2Ga9AWgjmKPcUcX9ODslYuNx%2BOTQCVhPS1NYzIe11GcuMnnApuoTpr6SwfNPL9VaR23pWK0qvlabyX4Mna%2F6fd7jvb5CGciUteURI57ESPzwxNz1wkE%2BEs8L%2FX0yqqHRDiis%2Fc499Nf3XG%2FYeP2D95Fhc5X5%2B8X1iit2JWEjlGzJ5ZkGwOM61x&X-Amz-Signature=7ce77298b42f4e1c29072e830e1e5599e6e426bca0491ae5086db6cd37b0eefe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
