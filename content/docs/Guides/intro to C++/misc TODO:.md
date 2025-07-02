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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642Q35ZJU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2F54CTTtYFWwNMSwX18cnyjekfxQivaP%2BXGHWdSTpAqAiBUR3141T4NX0wlkUJyaJuycHxvDzoDEK19OoA4EIXrnyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGRhtZlEsHjtJ1TVIKtwDTRkWIPWwsg%2FqHHUjfy082kUGrtemWXC1gd7EtmOeXzHQnv%2Fs0A3h0ltG%2BLS8rlPkkTCCiAzUt0jPNqvIbAuBQZUGaxdJzPkH3V%2BG3lRsfLCB5bs%2FASyXqa8yzUXDSi4mo1Tn08ml6KE%2Fh2u0jNVMAKGLNbW4vL5J8BaHVfHrDOdgM1Uun41dP0b2nadCIHfyyK67UU5yFBcs2PHUshVsNc4MVud3oG0ivPovnN2fYvjxeyUZESx8edPT97maxbaENFZkuBsExt5hGUx7ui4%2Bqn5FOZb0AaMfRuwOe6L49ZHa%2BN1%2FGSK%2FUsg9FQTmWFTRF5VF8uRcRFSQFJawABGrG3EeBQ04js7L5CaR3SPlkUnAq%2B3JT%2FzXwKg5rIAlY8nKsGcPIPwjcHfVwMto%2BsdphZqTBu4BF6KV36osiCks0YRs2VjX4c65cH8mtjieN7bh8djMYw9dA0eL0c%2FlRJS46gv%2B8zvKJNZ67s4hOhHzqIxAAvq6cW7dXoAeju4QuIX8Xw%2FuYS4H7aqYwnvqB7%2FzCeboMuwjoa2HeZHv5wzrBYBf%2BVzxMKzwjmpZ53eWMxzC9mmkWgd9CVJ42A1PAj4TmA8GHJmHsAwPsT8XYyrCR80mgTA%2FtKTTdUPn73swwZOUwwY6pgFrCW4osLqCt5%2BDTduwqxmV6Y3TTLlePG3QFJpBLmxmr229nQAbHajmwzmKYHf8xSbChoS4eW%2Bw0I4GZDJQPDOEp8AXdJCxEAoWa8MOa9SZSDChi5BVq45qsB2J%2FfQupaNHUzQoln7MhG7YDnJcZRbAzoAPUz2oFCGNrMjsJad%2Fn1tPwr0Bk3UNS6gjfVqasDhfgo56Phuiv7NAWClfOaaG0sUf0iyl&X-Amz-Signature=34e9078dbee516c237617c8c3e8d67ff2783cd6ac13b0daf12ccefc4364b8de4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642Q35ZJU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2F54CTTtYFWwNMSwX18cnyjekfxQivaP%2BXGHWdSTpAqAiBUR3141T4NX0wlkUJyaJuycHxvDzoDEK19OoA4EIXrnyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGRhtZlEsHjtJ1TVIKtwDTRkWIPWwsg%2FqHHUjfy082kUGrtemWXC1gd7EtmOeXzHQnv%2Fs0A3h0ltG%2BLS8rlPkkTCCiAzUt0jPNqvIbAuBQZUGaxdJzPkH3V%2BG3lRsfLCB5bs%2FASyXqa8yzUXDSi4mo1Tn08ml6KE%2Fh2u0jNVMAKGLNbW4vL5J8BaHVfHrDOdgM1Uun41dP0b2nadCIHfyyK67UU5yFBcs2PHUshVsNc4MVud3oG0ivPovnN2fYvjxeyUZESx8edPT97maxbaENFZkuBsExt5hGUx7ui4%2Bqn5FOZb0AaMfRuwOe6L49ZHa%2BN1%2FGSK%2FUsg9FQTmWFTRF5VF8uRcRFSQFJawABGrG3EeBQ04js7L5CaR3SPlkUnAq%2B3JT%2FzXwKg5rIAlY8nKsGcPIPwjcHfVwMto%2BsdphZqTBu4BF6KV36osiCks0YRs2VjX4c65cH8mtjieN7bh8djMYw9dA0eL0c%2FlRJS46gv%2B8zvKJNZ67s4hOhHzqIxAAvq6cW7dXoAeju4QuIX8Xw%2FuYS4H7aqYwnvqB7%2FzCeboMuwjoa2HeZHv5wzrBYBf%2BVzxMKzwjmpZ53eWMxzC9mmkWgd9CVJ42A1PAj4TmA8GHJmHsAwPsT8XYyrCR80mgTA%2FtKTTdUPn73swwZOUwwY6pgFrCW4osLqCt5%2BDTduwqxmV6Y3TTLlePG3QFJpBLmxmr229nQAbHajmwzmKYHf8xSbChoS4eW%2Bw0I4GZDJQPDOEp8AXdJCxEAoWa8MOa9SZSDChi5BVq45qsB2J%2FfQupaNHUzQoln7MhG7YDnJcZRbAzoAPUz2oFCGNrMjsJad%2Fn1tPwr0Bk3UNS6gjfVqasDhfgo56Phuiv7NAWClfOaaG0sUf0iyl&X-Amz-Signature=3a9b00f9f43f0df539d1acc57d9ed676305831df807219906486a11b4e31475d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
